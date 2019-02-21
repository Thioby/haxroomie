const Session = require('./Session');
const RoomOpener = require('./RoomOpener');

module.exports = class RoomController {

  constructor(opt) {
    if (!opt) throw new Error('Missing required argument: opt');
    if (!opt.page) throw new Error('Missing required argument: opt.page');
    if (!opt.id && opt.id !== 0) {
      throw new Error('Missing required argument: opt.id');
    }
    
    /** puppeteer.Page object */
    this.page = opt.page;

    /**
     * ID is used to be able to send and recieve actions from clients through 
     * the Session object. The session.id will be equal to this.
     */
    this.id = opt.id;

    /**
     * Session object that can talk to clients.
     */
    this.session = this.createSession(this.id);

    /**
     * Holds the room info if the room has been opened.
     *
     * The roomInfo Object contains the HaxBall roomConfig Object with with
     * roomlink property attached to it.
     */
    this.roomInfo = null;

    /**
     * This will be set to true when one of the clients request the
     * OPEN_ROOM. Other clients can not request OPEN_ROOM when this is not null.
     */
    this.openRoomInProcess = null;
    
    /**
     * Creates actions and error actions easily
     */
    this.actionFactory = require('haxroomie-action-factory')(this.id);

    /**
     * How many seconds to wait for the roomlink when opening the haxball room
     * before failing.
     */
    this.timeout = 8;

    /**
     * Handles the opening and closing processes room.
     */
    this.roomOpener = this.createRoomOpener();
  }

  get [Symbol.toStringTag]() {
    return 'RoomController';
  }

  createSession(id) {
    let session = new Session({
      id: this.id,
      onClientAction: (action) => this.onClientAction(action),
      onCallRoom: (fn, ...args) => this.onCallRoom(fn, ...args),
      onGetPlugins: () => this.onGetPlugins(),
      onGetPlugin: (id) => this.onGetPlugin(id),
      onEnablePlugin: (name) => this.onEnablePlugin(name),
      onDisablePlugin: (name) => this.onDisablePlugin(name),
      onGetDependentPlugins: (name) => this.onGetDependentPlugins(name)
    });
    session.on('client_connected', this.onClientConnected.bind(this));
    session.on('client_disconnected', this.onClientDisconnected.bind(this));
    return session;
  }

  createRoomOpener() {
    let roomOpener = new RoomOpener({
      page: this.page,
      actionFactory: this.actionFactory,
      onEventFromBrowser: (action) => this.onEventFromBrowser(action),
      timeout: this.timeout
    });
    return roomOpener;
  }

  /**
   * Broadcast action to all clients subscribed to the Session.
   */
  broadcast(action) {
    if(!this.session) return false;
    this.session.broadcast(action);
    return true;
  }
  /**
   * Send an action to a client with clientID that is subscribed to the 
   * Session.
   * 
   * @param {any} clientID id of the client
   * @param {action} action action to send to the client
   * @return {boolean} was sending successfull
   */
  send(clientID, action) {
    if(!this.session) return false;
    this.session.send(clientID, action);
    return true;
  }

  /**
   * This gets called when a client subscribes to this rooms session.
   * Broadcasts the information to all subscribed clients.
   * 
   * @param {any} id id of client that subscribed to session
   */
  onClientConnected(id) {

    let action = this.actionFactory.create(
      'CLIENT_CONNECTED',
      {
        roomInfo: this.roomInfo,
        clientID: id,
        sessionID: this.session.id,
      }
    );
    this.broadcast(action);
  }
  /**
   * This gets called when a client unsubscribes from this rooms session.
   * Broadcasts the information to all subscribed clients.
   * 
   * @param {any} id id of client that unsubscribed from session
   */
  onClientDisconnected(id) {

    let action = this.actionFactory.create(
      'CLIENT_DISCONNECTED',
      { clientID: id }
    );
    this.broadcast(action);

  }

  /**
   * Receives actions from session.
   */
  async onClientAction(action) {
    switch (action.type) {

      case 'OPEN_ROOM':
        await this.onOpenRoom(action);
        break;
      case 'CLOSE_ROOM':
        await this.onCloseRoom(action);
        break;
      default:
        break;
    }  
  }

  /**
   * Gets called when a client has sent OPEN_ROOM action through this rooms
   * session.
   * 
   * @param {action} action - the action object client has sent
   */
  async onOpenRoom(action) {

    if (this.openRoomInProcess !== null) {
      this.send(action.sender, this.actionFactory.createError(
        'OPEN_ROOM_START',
        'Someone else is already opening the room'
      ));
      return;
    }

    this.openRoomInProcess = action.sender;
    this.broadcast(this.actionFactory.create(
      'OPEN_ROOM_START',
      { clientID: action.sender }
    ));

    let result = await this.roomOpener.open(action.payload.roomConfig);
    this.openRoomInProcess = null;
    if (!result.error) this.roomInfo = result.payload.roomInfo;
    this.broadcast(result);
  }

  /**
   * Gets called when a client has sent CLOSE_ROOM action through this rooms
   * session.
   * 
   * @param {action} action - the action object client has sent
   */
  async onCloseRoom(action) {
    await this.roomOpener.close();
    this.roomInfo = null;
    this.broadcast(this.actionFactory.create('ROOM_CLOSED'));
  }

  /**
   * Calls a function of the haxball roomObject in headless browser context.
   * This gets called from this rooms session.
   * 
   * @param {string} fn - name of the haxball roomObject function
   * @param {any} ...args - arguments for the function
   */
  async onCallRoom(fn, ...args) {
    let result = await this.page.evaluate((fn, args) => {
      return window.hroomie.callRoom(fn, ...args);
    }, fn, args);
    if (result.error) {
      throw new Error(result.payload);
    }
    return result.payload.result;
  }

  /**
   * Returns a list of PluginData objects.
   * @returns {Promise<Array.<PluginData>>} - array of plugins
   */
  async onGetPlugins() {
    let result = await this.page.evaluate(() => {
      return window.hroomie.getPlugins();
    });
    return result;
  }

  /**
   * Returns PluginData of the given plugin name.
   * 
   * @param {string} name - name of the plugin
   * @returns {Promise<PluginData|null>} - data of the plugin or null if
   *    plugin was not found
   */
  async onGetPlugin(name) {
    let result = await this.page.evaluate((name) => {
      return window.hroomie.getPlugin(name);
    }, name);
    return result;
  }
  /**
   * Enables a HHM plugin with the given name.
   * 
   * @param {string} name - name of the plugin
   * @returns {Promise<boolean} - was the plugin enabled or not?
   */
  async onEnablePlugin(name) {
    let result = await this.page.evaluate((name) => {
      return window.hroomie.enablePlugin(name);
    }, name);
    return result;
  }

  /**
   * Disables a HHM plugin with the given id. If the name is an Array then
   * it disables all the plugins in the given order.
   * 
   * @param {string|Array} name - name or array of names of the plugin(s)
   * @returns {Promise<boolean} - was the plugin disabled or not?
   */
  async onDisablePlugin(name) {
    let result = await this.page.evaluate((name) => {
      return window.hroomie.disablePlugin(name);
    }, name);
    return result;
  }

  /**
   * Gets a list of plugins that depend on the given plugin.
   * 
   * @param {string} name - name of the plugin
   * @returns {Promise<Array.<PluginData>>} - array of plugins
   */
  async onGetDependentPlugins(name) {
    let result = await this.page.evaluate((name) => {
      return window.hroomie.getDependentPlugins(name);
    }, name);
    return result;
  }

  /**
   * This function receives the actions sent from the headless browser context.
   *
   * If action type is **'ROOM_EVENT'**, then the payload contains *args* and
   * *handlerName* properties. The default event handlers are listed in
   * https://github.com/morko/haxroomie/blob/master/src/hhm/haxroomie-plugin.js
   * 
   * If action type is **'HHM_EVENT'**, then the payload contains *args* and
   * *eventType* properties. The event types are listed in
   * https://github.com/saviola777/haxball-headless-manager/blob/master/src/namespace.js
   *
   * @param {Action} action
   */
  async onEventFromBrowser(action) {
    action.sender = this.id;
    this.broadcast(action);
  }
}
