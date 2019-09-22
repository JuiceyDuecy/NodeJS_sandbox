'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) {
	throw Error('Please specify a file!');
}

fs.watch(filename, () => {
	const ls = spawn('ls', ['-l', '-h', filename]);
	let output = '';
	ls.stdout.on('data', chunk => (output += chunk));
	//extends event emitter, so we can have a listening event: 'x.on('close',...)
	ls.on('close', () => {
		const parts = output.split(/\s+/);
		console.log([parts[0], parts[4], parts[8]]);
	});
});

console.log(`Now watching ${filename} for changes...`);
