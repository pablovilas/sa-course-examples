var request = require('request');
var { fork } = require('child_process');

var Pipeline = require('./pipeline/pipeline');

var pipeline = new Pipeline();

var filterEncrypt = (input, next) => {
  // sync
  // require('./filters/encrypt').filterEncrypt(input, next);

  // async
  fork('./filters/encrypt.js', [input]).on('message', result => next(null, result));
};

var filterPrint = (input, next) => {
    console.log(`Result from filter is ${input}`);
    next(null, input);
};

var filterSend = (input, next) => {
  request.post(
    'http://httpbin.org/post',
    { form: { result: input } },
    (err, response, body) => {
      console.log(body);
      next(null, body);
    });
};

pipeline.use(filterEncrypt);
pipeline.use(filterPrint);

for (i = 0; i < 10; i++) pipeline.run('asdfqwerzxcv');

pipeline.on('error', (err) => {
    console.log(`The error is ${err}`);
});

pipeline.on('end', (result) => {
    console.log(`The result is ${result}`);
});
