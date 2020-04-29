const EventEmitter = require('events');

class Event extends EventEmitter {}

module.exports = new Event();