module.exports = class AbstractSubscriber {
    constructor(channel) {
        this.channel = channel;
    }
    subscribe(onMessage) {
        throw Error('Not implemented');
    }
}