var bcrypt = require('bcrypt');

const filterEncrypt = (input, next) => bcrypt.hash(input, 15, next); // point-free style callback

module.exports = {
  filterEncrypt,
};

if (require.main === module) {
  console.log("I'm process ID", process.pid);
  filterEncrypt(process.argv[2], (err, result) => process.send(result));
}

