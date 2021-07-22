#!/usr/bin/env node
import meow from 'meow';
import latestVersion from 'latest-version';

const cli = meow(`
	Usage
	  $ latest-version <package-name>

	Options
	  --range  Specify which semver range to use to find the latest version

	Examples
	  $ latest-version ava
	  3.13.0
	  $ latest-version electron --range=beta
	  11.0.0-beta.11
`, {
	importMeta: import.meta,
	flags: {
		range: {
			type: 'string',
		},
	},
});

if (cli.input.length === 0) {
	console.error('Please specify a package name');
	process.exit(1);
}

(async () => {
	const {range: version} = cli.flags;

	const result = await latestVersion(cli.input[0], version ? {version} : {});
	console.log(result);
})();
