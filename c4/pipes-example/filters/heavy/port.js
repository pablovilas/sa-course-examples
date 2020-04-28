const filter = require('./implementation');

module.exports = function(job) {
  return filter(job.data);
};
