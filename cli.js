#!/usr/bin/env node
'use strict';
const meow = require('meow');
const latestVersion = require('latest-version');

const cli = meow(`
	Usage
		$ latest-version <package-name> [options...]

	Options
		-v       	Ouput current version number of this package
		--version	Specify which dist-tag to use to find the latest version

	Example
	  $ latest-version ava
		2.4.0

		$ latest-version ava --version=next
		2.0.0-rc.1
`, {
	autoVersion: false
});

if (cli.flags.v) {
	cli.showVersion();
}

if (cli.input.length === 0) {
	console.error('Please specify a package name');
	process.exit(1);
}

(async () => {
	const result = await latestVersion(cli.input[0], cli.flags);
	console.log(result);
})();
