const http = require('http');
const process = require('process');
const faker = require('faker');

const parallelReqs = parseInt(process.argv[2]);

const reqOptions = {
  url: 'localhost',
  port: 3000,
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  }
};

console.log(`Producing ${parallelReqs} reqs ...`);

for(let i = 0; i < parallelReqs; i++) {
  const req = http.request(reqOptions, handleResponse);

  console.log(`Sending request #${i} ...`);

  // Expressions vs Declarations
  // Hoisting
  function handleResponse(response) {
    console.log(`STATUS ${i}: ${response.statusCode}`);

    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      console.log(`BODY ${i}: ${chunk}`);
    });

    response.on('end', () => {
      console.log(`Finished ${i} @ ${response.headers['x-response-time']}`);
    });
  }

  req.on('error', (e) => {
    console.error(`ERROR ${i}: ${e.message}`);
  });

  const dataToSend = JSON.stringify({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email()
  });

  console.info(`Sending data ${dataToSend}`);

  req.write(dataToSend);
  req.end();
}


