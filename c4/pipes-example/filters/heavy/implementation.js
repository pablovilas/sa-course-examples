module.exports = function(data) {
  console.log(`HEAVY: with data: ${JSON.stringify(data)}`);

  const number = Math.floor(Math.random() * 11);

  if (number > 5) {
    for(let i = 0; i < 100; i++) {}
  }

  const result = Object.assign({
    firstAndLastName: `${data.lastName}, ${data.firstName}`
  }, data);

  fs.readFile('ruta', function(err, data) {

  })

  fs.readFilePromise('ruta')
    .then(data => {})
    .catch(err => {})

  return Promise.resolve(result)
    .then()
    .catch;
}
