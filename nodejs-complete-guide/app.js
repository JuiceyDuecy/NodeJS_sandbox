'use strict';
const http = require('http');

const routes = require('./routes');

http.createServer(routes).listen(3000);
