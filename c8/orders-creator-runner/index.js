const request = require('./request');
const async = require('async');

function time(init) {
    return (new Date().getTime() - init.getTime()) / 1000;
}

const init = new Date();

async.each([...Array(5000).keys()], (iter, cb) => {
    request(cb);
    console.log(`Request #${iter + 1}`);
}, (err) => {
    if (err) {
      console.log('A request failed to process');
    } else {
      console.log(`All requests have been processed, took ${time(init)} seconds`);
    }
});