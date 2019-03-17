// npm i xmlhttprequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Blocking example function
function blocking() {
    var init = new Date();
    var request = new XMLHttpRequest();
    request.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', false);  // `false` makes the request synchronous
    request.send(null);
    
    if (request.status === 200) {
        var end = new Date();
        console.log('  * Blocking GET took ' + time(end, init) + 's');
    }
}

// Non blocking example function
function nonBlocking() {
    var init = new Date();
    var request = new XMLHttpRequest();
    request.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    request.onload = function () {
        var end = new Date();
        console.log('  * Non blocking GET took ' + time(end, init) + 's');
    };
    request.send();
}

function time(end, init) {
    return parseFloat((end - init) / 1000).toFixed(2);
}

console.log('=== BLOCKING CODE ===');
var init = new Date();
for (var i = 0; i < 5; i++) {
    blocking();
}
var end = new Date();
console.log('  Took me ' + time(end, init)  + 's to print this message');
console.log('======================');

console.log('\n=== NON BLOCKING CODE ===');
init = new Date();
for (var i = 0; i < 5; i++) {
    nonBlocking();
}
end = new Date();
console.log('  Took me ' + time(end, init)  + 's to print this message');
console.log('=========================');