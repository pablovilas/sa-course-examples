const http = require('http');

module.exports = class Ping {
    constructor (data) {
        this.options = Object.assign({
            method: 'GET', 
            host: 'localhost', 
            timeout: 100
        }, data);
    }
    ping() {
        return new Promise((resolve, reject) => {
            const req = http.request(this.options);
            req.on('response', (res) => {
                let data = '';
                res.on('data', function(chunk) {
                    data += chunk;
                });
                res.on('end', function() {
                    resolve(data);
                });
            });
            req.on('timeout', () => {
                req.destroy();
                reject(new Error (`Timeout pinging ${this.options.host}`));
            });
            req.on('error', (e) => {
                reject(new Error (`Error pinging ${this.options.host}: ${e.message}`));
            });
            req.end();
        });
    }
}