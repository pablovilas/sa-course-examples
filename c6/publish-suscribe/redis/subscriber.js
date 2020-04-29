const Connection = require('./connection'),
    AbstractSubscriber = require('../subscriber');

module.exports = class Subscriber extends AbstractSubscriber {
    constructor(channel) {
        super(channel);
        this.connection = Connection.connect();
        this.connection.subscribe(this.channel);
    }
    subscribe(onMessage) {
        this.connection.on('message', (channel, message) => { 
            onMessage(message);
        });
    }
}