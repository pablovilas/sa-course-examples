const Binder = require('./binder'),
    Publisher = Binder('publisher'),
    readline = require('readline');

let channel = 'test_channel';
let publisher = new Publisher(channel);

let timerId = setInterval(() => {
    let id = Math.floor(Math.random() * 10);
    let message = { id: id, name: `Name ${id}` };
    console.log(`\nSend message: ${JSON.stringify(message)}`);
    publisher.publish(message);
}, 3000);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
rl.question('Exit? ', () => {
    rl.close();
    clearInterval(timerId);
    process.exit(0);
});