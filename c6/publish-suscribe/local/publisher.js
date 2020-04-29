const AbstractPublisher = require('../subscriber'),
    Event = require('./event');

module.exports = class Publisher extends AbstractPublisher {
    constructor(channel) {
        super(channel);
    }
    publish(message) {
        Event.emit(this.channel, JSON.stringify(message));
    }
}