#!/usr/bin/env node
var rsa = require('./');
var argv = require('optimist').argv;

rsa(argv, function (err, doc) {
    if (err) {
        console.error(err);
        process.exit(1);
        return;
    }
    console.log(JSON.stringify(doc, null, 2));
});
