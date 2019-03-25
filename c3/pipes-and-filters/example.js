var Pipeline = require('./pipeline/pipeline');

var pipeline = new Pipeline();

var filterMultiply = (input, next) => {
    let result = input * input;
    next(null, result);
};
var filterPrint = (input, next) => {
    console.log(`Result from filter is ${input}`);
    next(null, input);
};

pipeline.use(filterMultiply);
pipeline.use(filterPrint);

pipeline.run(5);

pipeline.once('error', (err) => {
    console.log(`The error is ${err}`);
});

pipeline.once('end', (result) => {
    console.log(`The result is ${result}`);
});