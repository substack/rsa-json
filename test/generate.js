var test = require('tap').test;
var unpack = require('rsa-unpack');
var rsa = require('../');

test('verify unpacked keys', function (t) {
    var bs = [ 768, 1002, 1345, 2112, 3100 ];
    t.plan(10 * bs.length);
    
    bs.forEach(function (bits) {
        console.dir(bits);
        rsa({ bits : bits }, function (err, pair) {
            if (err) return t.fail(err);
            
            var pub = unpack(pair.public);
            var priv = unpack(pair.private);
            t.equal(pub.bits, bits);
            t.equal(priv.bits, bits);
            
            t.equal(pub.modulus.toString('hex'), priv.modulus.toString('hex'));
            t.equal(pub.publicExponent, priv.publicExponent);
            
            t.ok(priv.privateExponent.length > 30);
            t.ok(priv.prime1.length > 30);
            t.ok(priv.prime2.length > 30);
            t.ok(priv.exponent1.length > 30);
            t.ok(priv.exponent2.length > 30);
            t.ok(priv.coefficient.length > 30);
        });
    });
});
