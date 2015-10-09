import childProcess from 'child_process';
import test from 'ava';

test(t => {
	childProcess.execFile('./cli.js', ['ava'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout.trim().length > 0);
		t.end();
	});
});
