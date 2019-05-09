const Connection = require('./connection');

module.exports = class Publisher {
    constructor(channel) {
        this.channel = channel;
        this.connection = Connection.connect();
    }
    publish(message) {
        this.connection.publish(this.channel, JSON.stringify(message));
    }
}