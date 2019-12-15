'use strict';

const reqHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	//Handle two Routes "/" and "/users"
	//Return some greeting text on "/"
	//Return a List of Dummy Users on "/users"
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Home</title><head>');
		res.write('<body><h1>Hi There! Welcome to the User App!</h1></body>');
		res.write(
			'<body><h1><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Submit User</button></form></h1></body>'
		);
		res.write('</html>');
	}

	if (url === '/users') {
		res.write('<html>');
		res.write('<head><title>User List</title><head>');
		res.write('<body><h1><ol><li>Tom</li><li> Dick </li> <li> Harry </li> </ol></h1></body>');
		res.write('</html>');
	}
	//Add a form with a "username" <input> to the "/" page and submit a POST
	//request to "/create-user" upon a button click

	//Add the "/create-user" route and parse the incoming data (i.e. the username) and simply log it to the console.
	if (url === '/create-user' && method === 'POST') {
		const body = [];
		let username = [];
		req.on('data', chunk => {
			body.push(chunk);
			//console.log(body);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();

			username.push(parsedBody.split('=')[1]);
		});
		res.write('<html>');
		res.write('<body><h1>User created!</h1></body>');
		username.map(data => {
			res.write(`<li>${data}</li>`);
		});
		res.write('</html>');
	}
};

module.exports = reqHandler;
