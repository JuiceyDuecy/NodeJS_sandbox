'use strict';

const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) =>
	res.render('index', {
		pageTitle: 'Add User',
		path: '/'
	})
);
const users = [];

app.get('/users', (req, res, next) =>
	res.render('users', {
		pageTitle: 'Users',
		path: '/users',
		users: 'users'
	})
);
app.post('/users', (req, res, next) => {
	users.push({ users: req.body.title });
	res.redirect('/');
});
console.log(users);
app.listen(port);
