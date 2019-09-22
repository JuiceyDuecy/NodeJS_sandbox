'use strict';

const fs = require('fs');
const filename = process.argv[2];
if (!filename) {
	throw Error('Please specify a file name!');
}
fs.watch(filename, () => console.log(`Changes made on file ${filename}!`));

console.log(`Now watching ${filename} for changes...`);
