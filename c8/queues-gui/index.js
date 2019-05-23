const Arena = require('bull-arena');
const Config = require('config');

function init() {
    const host = Config.get('redis.host');
    const queuesConfig = Config.get('queues');
    let queues = [];
    queuesConfig.forEach(queue => {
        queues.push({
            name: queue.name,
            hostId: queue.host,
            redis: {
              host: host
            },
        });
    });
    Arena({ queues: queues });
}

init();