module.exports = class AbstractPublisher {
    constructor(channel) {
        this.channel = channel;
    }
    publish(message) {
        throw Error('Not implemented');
    }
}