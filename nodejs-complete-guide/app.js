'use strict';
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const express_handlebars = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const rootDir = require('./util/path.js');

const app = express();

//bring in handlebars
//app.engine('handlebars', express_handlebars({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout.handlebars' }));
//set a global config value with app.set
app.set('view engine', 'ejs');
//tells express where our views are!
app.set('views', 'views');

//add a parser
app.use(bodyParser.urlencoded({ extended: false }));
//have express serve static files (like our css files)
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminData.routes);

app.use((req, res, next) => {
	res.status(404).render('404', { pageTitle: 'Page Not Found (template)' });
});
app.listen(3000);
