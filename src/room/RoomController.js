const logger = require('../logger');
const {
  UnusableError,
  RoomNotRunningError,
  RoomIsRunningError,
  RoomLockedError,
  HHMNotLoadedError
} = require('../errors');
const EventEmitter = require('events');
const RoomOpener = require('./RoomOpener');
const RepositoryController = require('./RepositoryController');
const PluginController = require('./PluginController');
const RoleController = require('./RoleController');
const RoomErrorHandler = require('./RoomErrorHandler');
const RoomConsoleHandler = require('./RoomConsoleHandler');
const stringify = require('../stringify');

/**
 * Event argument object that gets sent from the browser when a room event happens.
 * 
 * The `handlerName` can be one of the following:
 * `onPlayerJoin`
 * `onPlayerLeave` 
 * `onTeamVictory` 
 * `onPlayerChat` 
 * `onTeamGoal` 
 * `onGameStart` 
 * `onGameStop` 
 * `onPlayerAdminChange` 
 * `onPlayerTeamChange` 
 * `onPlayerKicked` 
 * `onGamePause` 
 * `onGameUnpause` 
 * `onPositionsReset` 
 * or
 * `onStadiumChange` 
 * 
 * See the 
 * [roomObject documentation](https://github.com/haxball/haxball-issues/wiki/Headless-Host#roomobject)
 * to find out what kind of arguments to expect.
 *
 * @typedef {Object} RoomEventArgs
 * @property {string} handlerName - Name of the haxball room event handler
 *    function that got triggered.
 * @property {Array.<any>} args - Arguments that the event handler function
 *    received.
 */

/**
 * Object containing files name and content.
 * 
 * @typedef {Object} FileDef
 * @property {string} name - Files name.
 * @property {string} content - UTF-8 encoded contents of the file.
 */

/**
 * Emitted when the browser tab gets closed.
 * Renders this RoomController unusable.
 * @event RoomController#page-closed
 * @param {RoomController} room - Instance of RoomController that was
 *    controlling the page.
 */

/**
 * Emitted when the browser tab crashes.
 * Renders this RoomController unusable.
 * @event RoomController#page-crash
 * @param {Error} error - The error that was throwed.
 */

/**
 * Emitted when some script throws an error in the browsers tab.
 * @event RoomController#page-error
 * @param {Error} error - The error that was throwed.
 */

/**
 * Emitted when a browser tab logs an error to the console
 * @event RoomController#error-logged
 * @param {string} message - The logged error message.
 */

/**
 * Emitted when a browser tab logs a warning to the console
 * @event RoomController#warning-logged
 * @param {string} message - The logged warning message.
 */

/**
 * Emitted when {@link RoomController#openRoom} has been called.
 * @event RoomController#open-room-start
 * @param {object} config - Config object given as argument to
 *    {@link RoomController#openRoom}
 */

/**
 * Emitted when {@link RoomController#openRoom} has finished and the room
 * is running.
 * @event RoomController#open-room-stop
 * @param {object} roomInfo - Information about the room.
 */

/**
 * Emitted when {@link RoomController#openRoom} fails.
 * @event RoomController#open-room-error
 * @param {Error|TypeError|ConnectionError|TimeoutError} error
 *    - Error that happened when opening the room.
 */

/**
 * Emitted when {@link RoomController#closeRoom} has been called.
 * @event RoomController#close-room-start
 */

/**
 * Emitted when {@link RoomController#closeRoom} has finished.
 * @param {Error} [error] - If error happened during closeRoom.
 * @event RoomController#close-room-stop
 */

/**
 * Emitted when supported HaxBall roomObject event happens.
 * @event RoomController#room-event
 * @param {RoomEventArgs} roomEventArgs - Event arguments.
 */

/**
 * Emitted when a plugin is loaded.
 * @event RoomController#plugin-loaded
 * @param {PluginData} pluginData - Information about the plugin.
 */

/**
 * Emitted when a plugin is removed.
 * @event RoomController#plugin-removed
 * @param {PluginData} pluginData - Information about the plugin.
 */

/**
 * Emitted when a plugin is enabled.
 * @event RoomController#plugin-enabled
 * @param {PluginData} pluginData - Information about the plugin.
 */

/**
 * Emitted when a plugin is disabled.
 * @event RoomController#plugin-disabled
 * @param {PluginData} pluginData - Information about the plugin.
 */

/**
 * RoomController provides an interface to communicate with 
 * [HaxBall roomObject]{@link https://github.com/haxball/haxball-issues/wiki/Headless-Host#roomconfigobject}
 * and
 * [Haxball Headless Manager (HHM)]{@link https://github.com/saviola777/haxball-headless-manager}. 
 * Each RoomController controls one tab in the headless browser.
 * 
 * You can also create new RoomController instances with the
 * [Haxroomie#addRoom]{@link Haxroomie#addRoom} method.
 * 
 */
class RoomController extends EventEmitter {

  /**
   * Constructs a new RoomController object.
   * 
   * @param {object} opt - Options.
   * @param {object} opt.id - ID for the room.
   * @param {object} opt.page - Puppeteer.Page object to control.
   * @param {number} [opt.timeout=30] - Max time to wait in seconds for the
   *    room to open.
   * @param {string} [opt.hhmVersion] - Version of Haxball Headless
   *    Manager to use.
   * @param {FileDef} [hhm] - Haxball Headless Manager source.
   */
  constructor(opt) {
    super();

    this.validateArguments(opt);

    this.id = opt.id;
    this.page = opt.page;
    this.timeout = opt.timeout || 30;

    this._hhmVersion = opt.hhmVersion;
    this._hhm = opt.hhm;

    this._usable = true;
    this._hhmLoaded = false;
    this._roomInfo = null;
    this._openRoomLock = false;

    this.roomOpener = new RoomOpener({
      id: this.id,
      page: this.page,
      onRoomEvent: (eventArgs) => this.onRoomEvent(eventArgs),
      onHHMEvent: (eventArgs) => this.onHHMEvent(eventArgs),
      timeout: this.timeout,
    });

    this._repositories = new RepositoryController({ page: this.page });
    this._plugins = new PluginController({ page: this.page });
    this._roles = new RoleController(
      { page: this.page, plugins: this._plugins }
    );
    this._errorHandler = new RoomErrorHandler({
      page: this.page,
      setRoomState: this.setRoomState,
      emit: this.emit,
      roomId: this.id
    });
    this._consoleHandler = new RoomConsoleHandler({
      page: this.page,
      emit: this.emit,
      roomId: this.id
    });

    this.page.on('close', () => {
      this.emit(`page-closed`, this);
      this._usable = false;
    });
  }

  get [Symbol.toStringTag]() {
    return 'RoomController';
  }

  /**
   * Is the room running.
   * @type boolean
   * @default false
   */
  get running() {
    return this._roomInfo ? true : false;
  }

  /**
   * Is Haxball Headless Manager loaded.
   * @type boolean
   * @default false
   */
  get hhmLoaded() {
    return this._hhmLoaded;
  }

  /**
   * Is the instance still usable.
   * @type boolean
   * @default true
   */
  get usable() {
    return this._usable;
  }

  /**
   * If room is running, contains its data (like e.g. `roomInfo.roomLink`).
   * If not running, then this is `null`. Returns a copy of the original
   * object.
   * @type object
   * @default null
   */
  get roomInfo() {
    return JSON.parse(JSON.stringify(this._roomInfo));
  }

  /**
   * If opening of the room is in process, then this will be `true`.
   * @type boolean
   * @default false
   */
  get openRoomLock() {
    return this._openRoomLock;
  }

  /**
   * Object that can be used to control and get information about plugins.
   * 
   * **Requires the room to be running!**
   * 
   * @type PluginController
   */
  get plugins() {
    if (!this.usable) throw new UnusableError();
    if (!this.running) throw new RoomNotRunningError();
    return this._plugins;
  }

  /**
   * Object that can be used to control and get information about repositories.
   * 
   * **Requires the HHM library to be loaded!**
   * 
   * To load HHM you can use the [init()]{@link RoomController#init} method or
   * open the room with [openRoom()]{@link RoomController#openRoom}.
   * 
   * @type RepositoryController
   */
  get repositories() {
    if (!this.usable) throw new UnusableError();
    if (!this._hhmLoaded) throw new HHMNotLoadedError();
    return this._repositories;
  }

  /**
   * Object that can be used to control and get information about roles.
   * 
   * **Requires the room to be running and sav/roles plugin to be loaded
   * and enabled!**
   * 
   * @type RoleController
   */
  get roles() {
    if (!this.usable) throw new UnusableError();
    if (!this.running) throw new RoomNotRunningError();
    return this._roles;
  }
  /**
   * Validates the arguments for the constructor.
   * 
   * @param {object} opt - argument object for the constructor
   * @private
   */
  validateArguments(opt) {
    if (!opt) {
      throw new Error('Missing required argument: opt');
    }
    if (!opt.id && opt.id !== 0) {
      throw new Error('Missing required argument: opt.id');
    }
    if (!opt.page) throw new Error('Missing required argument: opt.page');
  }

  /**
   * Sets a property in this RoomController.
   * 
   * Passing this to the composite objects allow them to modify the state 
   * of the RoomController.
   * @param {string} property - Property to set.
   * @param {any} value - Value for the property.
   * @private
   */
  setRoomState(property, value) {
    this[property] = value;
  }

  /**
   * This function gets called from browser when a registered roomObject event
   * happens.
   *
   * @param {RoomEventArgs} eventArgs - Event arguments.
   * @emits RoomController#room-event
   * @private
   */
  async onRoomEvent(eventArgs) {
    this.emit('room-event', eventArgs);
  }

  /**
   * This function gets called from browser when a registered HHM event
   * happens.
   *
   * @param {HHMEventArgs} eventArgs - Event arguments.
   * @emits RoomController#plugin-loaded
   * @emits RoomController#plugin-removed
   * @emits RoomController#plugin-enabled
   * @emits RoomController#plugin-disabled
   * @private
   */
  async onHHMEvent(eventArgs) {
    switch (eventArgs.eventType) {
      case `pluginLoaded`:
        this.emit('plugin-loaded', eventArgs.pluginData);
        break;
      case `pluginRemoved`:
        this.emit('plugin-removed', eventArgs.pluginData);
        break;
      case `pluginEnabled`:
        this.emit('plugin-enabled', eventArgs.pluginData);
        break;
      case `pluginDisabled`:
        this.emit('plugin-disabled', eventArgs.pluginData);
        break;
    }
  }

  /**
   * Initializes the RoomController by navigating the page to the headless 
   * HaxBall URL and loads the Haxball Headless Manager library.
   * 
   * This enables the use of the [repositories]{@link RoomController#repositories}
   * object to get information about repositories before opening the room.
   * 
   * **Note that calling [close]{@link RoomController#close} will undo this.**
   * 
   * @param {object} [opt] - Options.
   * @param {string} [opt.hhmVersion] - Version of HHM to load. By default this
   *    is set to whatever is given in constructors `hhmVersion` option.
   * @param {FileDef} [opt.hhm] - Optionally load HHM source from a string.
   */
  async init(opt) {
    if (!this.usable) throw new UnusableError('Instance unusable!');

    opt = opt || {};
    const hhmVersion = opt.hhmVersion || this._hhmVersion;
    const hhm = opt.hhm || this._hhm;

    try {
      await this.roomOpener.initializePage({ hhmVersion, hhm });
    } catch (err) {
      this._hhmLoaded = false;
      throw err;
    }
    this._hhmLoaded = true;
  }

  /**
   * Opens a HaxBall room in a browser tab.
   * 
   * On top of the documentated properties here, the config object can contain
   * any properties you want to use in your own HHM config file. 
   * 
   * The config object is
   * usable globally from within the HHM config as the `hrConfig` object.
   * 
   * @param {object} config - Config object that contains the room information.
   * @param {string} config.token - Token to start the room with.
   *    Obtain one from <https://www.haxball.com/headlesstoken>.
   * @param {string} [config.roomName] - Room name.
   * @param {string} [config.playerName] - Host player name.
   * @param {int} [config.maxPlayers] - Max players.
   * @param {boolean} [config.public] - Should the room be public?
   * @param {object} [config.geo] - Geolocation override for the room.
   * @param {Array.<object>} [config.repositories] - Array of 
   *    HHM plugin repositories.
   * 
   *    See [HHM documentation](https://hhm.surge.sh/api/tutorial-writing-plugins.html#writing-publishing-plugins)
   *    about these objects (they are passed to `HHM.config.repositories`).
   * @param {object} [config.pluginConfig] - Haxball Headless Manager
   *    plugin config object. Passed to `HHM.config.plugins`.
   * 
   *    See [Haxball Headless Manager](https://github.com/saviola777/haxball-headless-manager)
   *    This tells HHM which plugins to load from the available repositories.
   *    You can also give the initial config to plugins here.
   * @param {boolean} [config.disableDefaultPlugins=false] - Set to true if you
   *    want to disable the non essential default HHM plugins.
   *    This can be useful if for example you want to test some plugins without
   *    others interfering with it.
   * @param {FileDef} [config.roomScript] - Regular haxball
   *    headless script to load when starting the room.
   * 
   *    Disables the non essential default plugins.
   * @param {FileDef} [config.hhmConfig] - Configuration for the haxball 
   *    headless manager (HHM).
   * @returns {object} - Config that the room was started with. 
   *    The `roomLink` property is added to the config (contains URL to the
   *    room).
   * 
   * @emits RoomController#open-room-start
   * @emits RoomController#open-room-stop
   * @emits RoomController#open-room-error
   * 
   * @throws {UnusableError} - The instance is not usable because the browser
   *    page crashed or closed.
   * @throws {ConnectionError} - Could not connect to HaxBall headless page.
   * @throws {TimeoutError} - Haxball Headless Manager took too much time to 
   *    start.
   * @throws {InvalidTokenError} - The token is invalid or expired.
   * @throws {RoomLockedError} - The room is already being opened.
   * @throws {RoomIsRunningError} - The room is already running.
   */
  async openRoom(config) {
    if (!this.usable) throw new UnusableError('Instance unusable!');
    if (this.running) throw new RoomIsRunningError(
      'The room is already running. Close it before opening again!'
    );
    if (this._openRoomLock) throw new RoomLockedError(
      'Room is already being opened!'
    );
    logger.debug(`RoomController#openRoom: ${this.id}`);
    this.emit(`open-room-start`, config);
    this._openRoomLock = true;

    try {
      if (!this.hhmLoaded) await this.init();
      this._roomInfo = await this.roomOpener.open(config);
    } catch (err) {
      this._openRoomLock = false;
      if (process.env.NODE_ENV !== 'development') await this.closeRoom();
      this.emit(`open-room-error`, err);
      throw err;
    }
    this._openRoomLock = false;
    this.emit(`open-room-stop`, this.roomInfo);
    return this._roomInfo;
  }

  /**
   * Closes the headless HaxBall room by navigating the page out of the
   * headless HaxBall URL.
   * 
   * @emits RoomController#close-room
   * 
   * @throws {UnusableError} - The instance is not usable because the browser
   *    page crashed or closed.
   */
  async closeRoom() {
    if (!this.usable) throw new UnusableError('Instance unusable!');
    logger.debug(`RoomController#closeRoom`);
    this.emit(`close-room-start`);

    try {
      await this.roomOpener.close();
    } catch (err) {
      this._usable = false;
      this._hhmLoaded = false;
      this._roomInfo = null;
      this.emit(`close-room-stop`, err);
      throw new UnusableError(err.msg);
    } 
    this._hhmLoaded = false;
    this._roomInfo = null;
    this.emit(`close-room-stop`);
  }

  /**
   * Calls a function of the 
   * [HaxBall roomObject](https://github.com/haxball/haxball-issues/wiki/Headless-Host#roomobject) 
   * in the browsers context.
   * 
   * @param {string} fn - Name of the haxball roomObject function.
   * @param {any} ...args - Arguments for the function.
   * @returns {Promise.<any>} - Return value of the called function.
   * 
   * @throws {UnusableError} - The instance is not usable because the browser
   *    page crashed or closed.
   * @throws {RoomNotRunningError} - The room is not running.
   */
  async callRoom(fn, ...args) {
    if (!this.usable) throw new UnusableError('Instance unusable!');
    if (!this.running) throw new RoomNotRunningError('Room is not running.');
    if (!fn) throw new TypeError('Missing required argument: fn');
    logger.debug(`RoomController#callRoom: ${stringify(fn)} ARGS: ${stringify(args)}`);

    let result = await this.page.evaluate((fn, args) => {
      return window.hroomie.callRoom(fn, ...args);
    }, fn, args);
    if (result.error) throw new Error(result.payload);
    return result.payload.result;
  }

  /**
   * Wrapper for Puppeteers 
   * [page.evaluate](https://github.com/GoogleChrome/puppeteer/blob/v1.18.0/docs/api.md#pageevaluatepagefunction-args).
   * 
   * Evaluates the given code in the browser tab this instace is controlling.
   * You can access the HaxBall roomObject with `HHM.manager.room`.
   * 
   * e.g.
   * ```js
   * room.eval('HHM.manager.room.getPlayerList()');
   * ```
   * 
   * @param {string|function} pageFunction - JavaScript to evaluate.
   * @param {...Serializable|...JSHandle} [args] - Arguments to pass to `js`.
   * @returns {Promise.<Serializable>} -  Promise which resolves to the 
   *    return value of pageFunction.
   */
  async eval(pageFunction, ...args) {
    return this.page.evaluate(pageFunction, ...args);
  }

}

module.exports = RoomController;