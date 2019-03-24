var Pipeline = require('./pipeline');

class DirectPipeline extends Pipeline {
    start(input) {
        var pendingFilters = this.filters.slice();
        // Iterate over filters array
        var loop = (err, result) => {
            if (err) {
                // Emit an event and stop execution if an error occurs
                return this.emit('error', err);
            }
            if (pendingFilters.length === 0) {
                // Emit an evente and finalize excecution when no more filters left
                return this.emit('end', result);
            }
            var filter = pendingFilters.shift();  
            process.nextTick(() => {
                filter.call(this, result, loop);
            });
        };
        // First filter call
        process.nextTick(() => {
            loop(null, input);
        });
    }
}

module.exports = DirectPipeline;