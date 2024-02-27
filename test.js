import test from 'ava';
import {execa} from 'execa';
import semverRegex from 'semver-regex';

const verify = test.macro(async (t, {args, expected, error}) => {
	const {stdout, stderr} = await execa('./cli.js', args.split(' '), {reject: false, env: {NO_COLOR: '1'}});

	if (error) {
		t.is(stderr, error);
	} else if (expected instanceof RegExp) {
		t.regex(stdout, expected);
	} else {
		t.is(stdout, expected);
	}
});

test('main', verify, {
	args: 'ava',
	expected: semverRegex(),
});

test('--range', verify, {
	args: 'update-notifier-tester --range=0.0.3-rc1',
	expected: '0.0.3-rc1',
});

test('--registry-url', verify, {
	args: 'ava --registry-url=https://registry.yarnpkg.com',
	expected: semverRegex(),
});

test('includes deprecated versions by default', verify, {
	args: 'querystring',
	expected: '0.2.1',
});

test('flags: --no-deprecated', verify, {
	args: 'querystring --range=0.2 --no-deprecated',
	error: '✖ Version `0.2` for package `querystring` could not be found.',
});

// TODO: maybe packageJson('querystring', {omitDeprecated: true}) should throw:
// All versions of the package `querystring` are deprecated.

test('package does not exist', verify, {
	args: 'nnnope',
	error: '✖ Package `nnnope` could not be found.',
});

test('version does not exist', verify, {
	args: 'ava --range=next',
	error: '✖ Version `next` for package `ava` could not be found.',
});
