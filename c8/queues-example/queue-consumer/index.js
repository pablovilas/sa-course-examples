const Queue = require('bull');

let time = (init) => {
    return (new Date().getTime() - init.getTime()) / 1000;
}

const queue = new Queue('users');
var init = null;

queue.process((job, done) => {
    if (init == null) { init = new Date(); }
    let message = job.data;
    console.log(`Received user: ${message.firstName}`);
    // Simulate CPU processing
    setTimeout(done, 10);
});

queue.on('drained', (job) => {
    console.log(`All requests have been processed, took ${time(init)} seconds`);
    init = null;
});