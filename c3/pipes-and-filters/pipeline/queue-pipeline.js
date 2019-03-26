const AbstractPipeline = require('./abstract-pipeline'),
    Queue = require('bull');

class QueuePipeline extends AbstractPipeline {
    constructor() {
        super();
        this.initialized = false;
        this.queues = [];
    }
    use(filter) {
        this.queues.push(new Queue(filter.name));
        return super.use(filter);
    }
    run(input) {
        if (this.queues.length > 0) {
            if (!this.initialized) {
                for (let i = 0; i < this.queues.length; i++) {
                    let queue = this.queues[i];
                    let filter = this.filters[i];
                    let next = (this.queues.length !== i + 1) ? this.queues[i + 1] : null;
                    queue.process((job, done) => {
                        filter.call(this, job.data, (err, result) => {
                            if (err) {
                                this.emit('error', err);
                                done(err);
                            } else {
                                if (next) {
                                    next.add(result, { removeOnComplete: true });
                                }
                                done();
                            }
                        });
                    });
                    if (!next) {
                        queue.on('completed', (job) => {
                            this.emit('end', job.data);
                        });
                    }
                }
                this.initialized = true;
            }
            let queue = this.queues[0];
            queue.add(input, { removeOnComplete: true });
        }
    }
}

module.exports = QueuePipeline;