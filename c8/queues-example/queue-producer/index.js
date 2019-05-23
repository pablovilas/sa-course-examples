const Queue = require('bull');
const async = require('async');

let User = (id) => {
    return {
        firstName: `John ${id}`,
        lastName: 'Doe',
        email: `john-${id}@example.com`
    }
}

let time = (init) => {
    return (new Date().getTime() - init.getTime()) / 1000;
}

const queue = new Queue('users');
const init = new Date();
async.each([...Array(5000)].map((v, i) => i + 1), (iter, cb) => {
    let user = User(iter);
    queue.add(user/*, { removeOnComplete: true }*/);
    console.log(`User #${user.firstName} sent`);
    cb();
}, (err) => {
    if (err) {
      console.log('A request failed to process');
    } else {
      console.log(`All requests have been processed, took ${time(init)} seconds`);
    }
});