const readline = require('readline');
const colors = require('colors/safe');
const logger = require('../logger');

const COLORS = {
  'ADDING ROOM': colors.green,
  'ROOM ADDED': colors.green.bold,
  'CLOSING ROOM': colors.yellow,
  'ROOM CLOSED': colors.yellow.bold,
  'STARTING ROOM': colors.green,
  'ROOM STARTED': colors.green.bold,
  'ROOM NOT STARTED': colors.red.bold,
  'CHAT': colors.white.bold,
  'PLAYER JOINED': colors.green,
  'PLAYER LEFT': colors.cyan,
  'PLAYER KICKED': colors.yellow.bold,
  'GAME PAUSED': colors.cyan,
  'GAME UNPAUSED': colors.cyan,
  'GAME STOPPED': colors.cyan,
  'GAME STARTED': colors.cyan,
  'PLAYER BANNED': colors.red,
  'ADMIN': colors.yellow,
  'UNADMIN': colors.yellow,
  'PLAYERS': colors.green,
  'ROLE INFO': colors.green,
  'PAGE CLOSED': colors.red,
  'ERROR': colors.red.bold,
  'INVALID COMMAND': colors.red,
  'INVALID ARGUMENTS': colors.red,
  'PLUGINS LOADED': colors.green,
  'PLUGIN LOADED': colors.green,
  'PLUGIN REMOVED': colors.cyan,
  'PLUGIN ENABLED': colors.green,
  'PLUGIN DISABLED': colors.cyan,
  'LOADING CONFIG': colors.yellow,
  'RELOAD CONFIG': colors.yellow
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cmd = null;

rl.on(`line`, (line) => onNewLine(line));
rl.on(`close`, () => {
  if (!cmd) {
    process.exit(0);
  } else {
    cmd.execute(`q`);
  }
});

/**
 * Sets the prompt string
 * @param {string} prompt - The prompt string.
 */
function setPrompt(prompt) {
  rl.setPrompt(prompt);
}

/**
 * Sets the current command handler.
 * @param {CommandHandler} commands - Object that contains commands.
 */
function setCommands(commands) {
  cmd = commands;
}

/**
 * Asks user a question.
 * @param {string} question - Question to ask.
 * @param {function} cb - Callback that receives the answer.
 */
function question(question, cb) {
  rl.question(question, cb);
  createPrompt();
}

/**
 * Prints message to console.
 * @param {string} msg - The message.
 * @param {string} type - Type of message.
 */
function print(msg, type) {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  if (type) msg = createMessage(type, msg);
  console.log(msg);
  createPrompt();
}

/**
 * Prints error to console. If `err` is type of `Error` an error stack
 * will be printed.
 * @param {Error|string} err - The message.
 */
function error(err) {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);

  if (typeof err === 'Error') {
    logger.error(err.stack);
  } else {
    logger.error(err);
  }
  createPrompt();
}

/**
 * Prints warning message to console.
 * @param {string} msg - The message.
 */
function warn(msg) {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);

  logger.warn(msg);
  createPrompt();
}

/**
 * Formats the message based on its type.
 * @param {string} type - Type of message.
 * @param {string} msg - The message.
 */
function createMessage(type, msg) {
  let coloredType = `[${type}]`;
  if(COLORS[type]) coloredType = COLORS[type](type);
  let fullMsg = `${coloredType}`;
  if (!msg) return fullMsg;
  if (typeof msg !== `string`) {
    throw new Error(`Msg has to be typeof string`);
  }
  fullMsg += ` ${msg}`;
  return fullMsg;
}

/**
 * Inserts a new input prompt.
 */
function createPrompt() {
  rl.prompt(true);
}

/**
 * Receives the lines from process.stdout and executes commands.
 * @param {string} input 
 */
async function onNewLine(line) {
  try {
    if (cmd) {
      await cmd.execute(line);
    } else {
      print('Console is not yet ready.')
    }

  } catch (err) {

    switch (err.name) {
      case 'InvalidCommandError':
        print(`${line} (type "help" for commands)`, 'INVALID COMMAND');
        break;

      case 'InvalidCommandArgsError':
        print(err.message, 'INVALID ARGUMENTS');
        break;

      default:
        print(`Error executing: ${line}`, 'ERROR');
        logger.error(err.stack);
    }

    logger.debug(err.stack);
  }
  createPrompt();
}

module.exports = {
  setCommands,
  setPrompt,
  print,
  error,
  warn,
  question
}