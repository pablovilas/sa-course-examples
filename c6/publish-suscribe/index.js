const Publisher = require('./publisher');
const Subscriber = require('./subscriber');

let channel = 'test_channel';
let publisher = new Publisher(channel);
let subscriber = new Subscriber(channel);

subscriber.subscribe((message) => {
    console.log(`Received message: ${JSON.stringify(message)}\n`);
});

let timerId = setInterval(() => {
    let id = Math.floor(Math.random() * 10);
    let message = { id: id, name: `Name ${id}` };
    console.log(`Send message: ${JSON.stringify(message)}`);
    publisher.publish(message);
}, 3000);

setTimeout(() => { 
    clearInterval(timerId) 
}, 10000);