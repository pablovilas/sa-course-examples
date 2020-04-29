const AbstractSubscriber = require('../subscriber'),
    Event = require('./event');

module.exports = class Subscriber extends AbstractSubscriber {
    constructor(channel) {
        super(channel);
    }
    subscribe(onMessage) {
        Event.on(this.channel, onMessage);
    }
}