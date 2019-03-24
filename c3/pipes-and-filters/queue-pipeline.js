var Pipeline = require('./pipeline');

class QueuePipeline extends Pipeline {
    start(input) {
        throw new Error('Not implemented');
    }
}

module.exports = QueuePipeline;