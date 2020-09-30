#!/usr/bin/env node
'use strict';
const meow = require('meow');
const latestVersion = require('latest-version');

const cli = meow(`
	Usage
	  $ latest-version <package-name>

	Options
	  -v         Ouput the version of this package
	  --version  Specify which semver-range to use to find the latest version

	Example
	  $ latest-version ava
	  2.4.0

	  $ latest-version ava --version=next
	  2.0.0-rc.1
`, {
	autoVersion: false,
	flags: {
		range: {
			type: 'string'
		}
	}
});

if (cli.flags.v) {
	cli.showVersion();
}

if (cli.input.length === 0) {
	console.error('Please specify a package name');
	process.exit(1);
}

(async () => {
	const {range: version} = cli.flags;

	const result = await latestVersion(cli.input[0], version ? {version} : {});
	console.log(result);
})();
