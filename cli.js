#!/usr/bin/env node
'use strict';
const meow = require('meow');
const latestVersion = require('latest-version');

const cli = meow(`
	Usage
	  $ latest-version <package-name>

	Example
	  $ latest-version ava
	  0.2.0
`);

if (cli.input.length === 0) {
	console.error('Please specify a package name');
	process.exit(1);
}

if (cli.input[0] === '.') {
	const version = require(process.env.PWD + '/package.json').version;
	console.log(version);
	process.exit(1);
 }


latestVersion(cli.input[0]).then(console.log);
