const Connection = require('./connection'),
    AbstractPublisher = require('../publisher');

module.exports = class Publisher extends AbstractPublisher {
    constructor(channel) {
        super(channel);
        this.connection = Connection.connect();
    }
    publish(message) {
        this.connection.publish(this.channel, JSON.stringify(message));
    }
}