#!/usr/bin/env node

var program = require('commander');

process.on('uncaughtException', function(e) {
    console.log(e);
    process.exit(1);
});

process.on('SIGINT', function() {
    process.exit(0);
});

process.on('unhandledRejection', function(reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

program.version(require('./package.json').version)
    .usage('<query>')
    .parse(process.argv)

program.parse(process.argv);

var params = encodeURIComponent(program.args.join(' '));

require('opn')('https://google.com/search?q=' + params, { wait: false });