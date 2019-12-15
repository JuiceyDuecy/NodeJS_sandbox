const path = require('path');

const express = require('express');
const router = express.Router();

const adminData = require('./admin');
const rootDir = require('../util/path.js');
//no need to add next(); as we are getting a response.
router.get('/', (req, res, next) => {
	const products = adminData.products;
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop (template)',
		path: '/',
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true
	});
});

module.exports = router;
