const Server = require('./server');

(async () => {
    try {
        await Server.init();
    } catch(err) {
        console.log(`Error initializing server: ${err}`);
        process.exit(1);
    }
})();