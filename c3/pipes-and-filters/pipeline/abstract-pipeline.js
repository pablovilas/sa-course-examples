const EventEmitter = require('events'),
    Util = require('util');

class AbstractPipeline {
    constructor() {
        this.filters = [];
        EventEmitter.call(this);
        Util.inherits(AbstractPipeline, EventEmitter);
    }
    use(filter) {
        this.filters.push(filter);
        return this;
    }
    run(input) {
        throw new Error('Not implemented');
    }
}

module.exports = AbstractPipeline;