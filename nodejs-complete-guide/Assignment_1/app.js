const http = require('http');

const routes = require('./routes');

const port = process.argv[2];

http.createServer(routes).listen(port);
if (process.argv[2] !== Number) {
	console.error('Please provide a valid port number!');
}
console.log(`Now listening on port ${port}`);
