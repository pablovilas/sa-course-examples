const Binder = require('./binder'),
    Subscriber = Binder('subscriber'),
    readline = require('readline');

let channel = 'test_channel';
let subscriber = new Subscriber(channel);

subscriber.subscribe((message) => {
    console.log(`Received message from subscriber: ${JSON.stringify(message)}`);
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
rl.question('Exit? ', () => {
    rl.close();
});