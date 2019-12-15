const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path.js');
// /admin/add-product => GET

const products = [];

//router.get('/add-product', (req, res, next) => {
//	res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//});

router.get('/add-product', (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product (template)',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
});

// /admin/product =>> POST
router.post('/add-product', (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect('/');
});

//module.exports = router;
exports.routes = router;
exports.products = products;
