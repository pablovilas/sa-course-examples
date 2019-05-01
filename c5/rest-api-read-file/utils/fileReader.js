const fs = require('fs');
const readline = require('readline');

module.exports.readCVS = async function(path) {
    try {
        let result = await process(path);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

async function process(path) {
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