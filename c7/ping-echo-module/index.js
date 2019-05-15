const Ping = require('./lib/ping');

let pingLocalServer = new Ping({ 
    host: 'localhost', 
    path: '/orders', 
    port: 8080, 
    headers: {
        'Accept': 'application/json' 
    }
});
let pingLocalServerError = new Ping({
    host: 'localhost', 
    path: '/orders/23', 
    port: 8080, 
    headers: { 
        'Accept': 'application/json' 
    }
});

pingLocalServer.ping();
pingLocalServer.on('success', (message) => console.log(message));
pingLocalServer.on('failure', (message) => console.log(message));

pingLocalServerError.ping();
pingLocalServerError.on('success', (message) => console.log(message));
pingLocalServerError.on('failure', (message) => console.log(message));