const Ping = require('./lib/ping');

let pingOrderService = new Ping({ 
    host: 'localhost', 
    path: '/orders', 
    port: 8080,
    timeout: 50,
    interval: 10000
});
let pingUserService = new Ping({
    host: 'localhost', 
    path: '/users', 
    port: 8081,
    timeout: 50,
    interval: 10000
});

pingOrderService.ping();
pingOrderService.on('success', (message) => console.log(message));
pingOrderService.on('failure', (message) => console.log(message));

pingUserService.ping();
pingUserService.on('success', (message) => console.log(message));
pingUserService.on('failure', (message) => console.log(message));