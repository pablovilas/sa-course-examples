const Binder = require('./binder'),
    Publisher = Binder('publisher'),
    Subscriber = Binder('subscriber');

let channel = 'test_channel';
let publisher = new Publisher(channel);
let subscriber = new Subscriber(channel);
let anotherSubscriber = new Subscriber(channel);

subscriber.subscribe((message) => {
    console.log(`Received message from subscriber: ${JSON.stringify(message)}`);
});

anotherSubscriber.subscribe((message) => {
    console.log(`Received message from another subscriber: ${JSON.stringify(message)}`);
});

let timerId = setInterval(() => {
    let id = Math.floor(Math.random() * 10);
    let message = { id: id, name: `Name ${id}` };
    console.log(`\nSend message: ${JSON.stringify(message)}`);
    publisher.publish(message);
}, 3000);

setTimeout(() => { 
    clearInterval(timerId) 
}, 10000);