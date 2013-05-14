var test = require('tape');
var unpack = require('rsa-unpack');
var rsa = require('../browser.js');

test('verify unpacked keys', function (t) {
    var bs = [ 768 ];
    t.plan(8 * bs.length);
    
    bs.forEach(function (bits) {
        console.dir(bits);
        var pair = rsa({ bits : bits });
            
        var pub = unpack(pair.public);
        var priv = unpack(pair.private);
        
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
