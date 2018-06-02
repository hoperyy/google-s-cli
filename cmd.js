#!/usr/bin/env node

var program = require('commander');

process.on('uncaughtException', (e) => {
    console.log(e);
    process.exit(1);
});

process.on('SIGINT', () => {
    process.exit(0);
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

program.version(require('./package.json').version)
    .usage('<query>')
    .parse(process.argv)

program.parse(process.argv);

var params = encodeURIComponent(program.args.join(' '));

require('opn')('https://google.com/search?q=' + params);