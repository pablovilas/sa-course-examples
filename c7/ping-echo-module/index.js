const Ping = require('./lib/ping');

let pingLocalServer = new Ping({ host: 'localhost', path: '/orders', port: 8080 });
(async () => {
    try {
        let result = await pingLocalServer.ping();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
})();