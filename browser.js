var keypair = require('keypair');

module.exports = function (opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    setImmediate(function () {
        var result;
        try {
            result = keypair(opts);
        } catch (ex) {
            return cb(ex);
        }
        cb(null, result);
    });
};
module.exports.native = keypair;
