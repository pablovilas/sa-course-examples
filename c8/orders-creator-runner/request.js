const request = require('request');

var options = { 
  method: 'POST',
  url: 'http://localhost:8080/orders',
  pool: { maxSockets: 1000 },
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json' },
  body: { 
    date: '2019-04-04',
    notes: 'Order notes',
    total: 100,
    items: [ 
      { name: 'Item 1', quantity: 1, price: 50 },
      { name: 'Item 2', quantity: 1, price: 50 }
    ],
    customer: { 
      name: 'Customer 1', 
      latitude: '-36.000', 
      longitude: '45.000'
    },
    business: {
      name: 'Business 1',
      latitude: '-36.700',
      longitude: '45.300'
    }
  },
  json: true
};

module.exports = (cb) => {
  request(options, (error, response, body) => {
    cb(error, body);
  });
};