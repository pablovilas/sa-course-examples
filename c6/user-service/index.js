const Server = require('./server');
const Repository = require('./repositories/repository');

(async () => {
    await Repository.initRepository();
    await Server.initServer();
})();