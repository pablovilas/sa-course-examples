const AbstractPipeline = require('./abstract-pipeline');

class QueuePipeline extends AbstractPipeline {
    start(input) {
        throw new Error('Not implemented');
    }
}

module.exports = QueuePipeline;