const Connection = require('./connection');

module.exports = class Subscriber {
    constructor(channel) {
        this.channel = channel;
        this.connection = Connection.connect();
        this.connection.subscribe(this.channel);
    }
    subscribe(onMessage) {
        this.connection.on('message', (channel, message) => { 
            onMessage(message);
        });
    }
}