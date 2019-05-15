const Http = require('http');
const EventEmitter = require('events');
const Util = require('util');

module.exports = class Ping extends EventEmitter {
    constructor (data) {
        super();
        this.options = Object.assign({
            method: 'GET', 
            host: 'localhost', 
            timeout: 100,
            interval: 3000
        }, data);
        this.interval = null;
    }
    url() {
        return `${this.options.host}:${this.options.port}${this.options.path}`;
    }
    ping() {
       this.createInterval();
    }
    doPing() {
        const self = this;
        const req = Http.request(this.options);
        req.on('response', (res) => {
            res.resume();
            res.on('end', function() {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    self.emit('success', `Successful ping to ${self.url()}: Status code is ${res.statusCode}`);
                } else {
                    self.emit('failure', `Error pinging ${self.url()}: Status code is ${res.statusCode}`);   
                }
            });
        });
        req.on('timeout', () => {
            req.destroy();
            self.emit('failure', `Timeout pinging ${self.url()}`);
        });
        req.on('error', (e) => {
            self.emit('failure', `Error pinging ${self.url()}: ${e.message}`);
        });
        req.end();
    }
    createInterval() {
        let interval = setInterval(this.doPing.bind(this), this.options.interval);
        process.on('exit', function (){
            clearInterval(interval);
        });
    }
}