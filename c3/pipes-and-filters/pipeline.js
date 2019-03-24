var EventEmitter = require('events'),
    Util = require('util');

class Pipeline {
    constructor() {
        this.filters = [];
        EventEmitter.call(this);
        Util.inherits(Pipeline, EventEmitter);
    }
    use(filter) {
        this.filters.push(filter);
        return this;
    }
    start(input) {
        throw new Error('Not implemented');
    }
}

module.exports = Pipeline;