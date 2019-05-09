const redis = require('redis');

let subscriber = redis.createClient();
let publisher  = redis.createClient();

let channel = 'test_channel';

subscriber.on('message', function(channel, message) {
  console.log(`Message '${message}' on channel '${channel}' arrived!`);
});

subscriber.subscribe(channel);

publisher.publish(channel, 'hello!');
publisher.publish(channel, 'hello again!');