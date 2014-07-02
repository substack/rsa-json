var spawn = require('child_process').spawn;
var fs = require('fs');
var keypair = require('keypair');

module.exports = function (opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    if (!opts) opts = {};
    
    var n = Math.floor(Math.pow(16, 8) * Math.random());
    var tmpFile = '/tmp/' + n.toString(16);
    var bits = opts.bits || 5000 + Math.floor(Math.random() * 100);
    
    var args = [ '-f', tmpFile, '-b', bits, '-N', '', '-q', '-t', 'rsa' ];
    var ps = spawn('ssh-keygen', args);
    
    ps.on('error', function (err) {
        cb(err);
        cb = function () {};
    });
    ps.on('exit', function (code) {
        if (code !== 0) return cb('non-zero code ' + code);
        var args = [ '-e', '-f', tmpFile + '.pub', '-m', 'PEM' ];
        var ps = spawn('ssh-keygen', args);
        ps.on('error', function (err) {
            cb(err);
            cb = function () {};
        });
        var pem = '';
        ps.stdout.on('data', function (buf) { pem += buf });
        ps.stdout.on('end', function () {
            fs.readFile(tmpFile, 'utf8', function (err, priv) {
                fs.unlink(tmpFile);
                fs.unlink(tmpFile + '.pub');
                
                if (err) return cb(err);
                
                cb(null, {
                    private : priv,
                    public : pem
                });
            });
        });
        
        ps.on('exit', function (code) {
            if (code !== 0) {
                cb('non-zero exit code ' + code);
                cb = function () {};
            }
        });
    });
};

module.exports.native = keypair;
