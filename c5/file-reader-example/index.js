const fs = require('fs');
const os = require('os');

const path = './data/hw_200.csv';

function readFileSync(path) {
    let result = [];
    let content = fs.readFileSync(path, 'utf8');
    let lines = content.split(os.EOL);
    for (line of lines) {
        let data = line.split(',');
        result.push(data);
    }
    return result;
}

function readFileAsync(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, 'utf8', (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

function readFileStream(path) {
    let result = [];
    return new Promise((resolve, reject) => {
        let stream = fs.createReadStream(path);
        let rl = readline.createInterface({
            input: stream,
            terminal: false
        });
        rl.on('line', (line) => {
            result.push(line.split(','));
        }).on('close', () => {
            resolve(result);
        }).on('error', err => {
            reject(err);
        })
    });
}

function time(end, init) {
    return parseFloat((end - init) / 1000).toFixed(2);
}

console.log('=== BLOCKING READ ===');
var init = new Date();

console.log(readFileSync(path));

var end = new Date();
console.log('  Took me ' + time(end, init)  + 's to print this message');
console.log('======================');

console.log('\n=== NON BLOCKING READ ===');
var init = new Date();

(async () => console.log(await readFileAsync(path)))();

var end = new Date();
console.log('  Took me ' + time(end, init)  + 's to print this message');
console.log('======================');

console.log('\n=== STREAM READ ===');
var init = new Date();

(async () => console.log(await readFileAsync(path)))();

var end = new Date();
console.log('  Took me ' + time(end, init)  + 's to print this message');
console.log('======================');