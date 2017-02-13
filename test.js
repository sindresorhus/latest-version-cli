import test from 'ava';
import execa from 'execa';
import semverRegex from 'semver-regex';

test(async t => {
	const {stdout} = await execa('./cli.js', ['ava']);
	t.regex(stdout, semverRegex());
});
