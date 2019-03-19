const http = require('http'); // require a node.js module

const hostname = '127.0.0.1';
const port = 3000; // check if you have permissions for running node.js in this port

console.log('=========== Initializing Node.js =========== ');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`  Server running at http://${hostname}:${port}/`);
  console.log('============================================');
});
