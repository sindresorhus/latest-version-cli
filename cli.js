#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import latestVersion, {PackageNotFoundError, VersionNotFoundError} from 'latest-version';
import logSymbols from 'log-symbols';

const cli = meow(`
	Usage
	  $ latest-version <package-name>

	Options
	  --range          Specify which semver range to use to find the latest version
	  --registry-url   Custom registry URL
	  --no-deprecated  Omit deprecated versions

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
		registryUrl: {
			type: 'string',
		},
		deprecated: {
			type: 'boolean',
			default: true,
		},
	},
});

if (cli.input.length === 0) {
	console.error('Please specify a package name');
	process.exit(1);
}

const options = {
	version: cli.flags.range,
	registryUrl: cli.flags.registryUrl,
	omitDeprecated: !cli.flags.deprecated,
};

try {
	const result = await latestVersion(cli.input[0], options);
	console.log(result);
} catch (error) {
	if (error instanceof PackageNotFoundError || error instanceof VersionNotFoundError) {
		console.error(`${logSymbols.error} ${error.message}.`);
		process.exitCode = 1;
	} else {
		throw error;
	}
}

