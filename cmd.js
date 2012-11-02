#!/usr/bin/env node
var rsa = require('./');
rsa(function (err, doc) {
    if (err) {
        console.error(err);
        process.exit(1);
        return;
    }
    console.log(JSON.stringify(doc, null, 2));
});
