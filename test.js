import test from 'ava';
import execa from 'execa';
import semverRegex from 'semver-regex';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['ava']);
	t.regex(stdout, semverRegex());
});

test('--version', async t => {
	const {stdout} = await execa('./cli.js', ['update-notifier-tester', '--version=0.0.3-rc1']);
	t.is(stdout, '0.0.3-rc1');
});
