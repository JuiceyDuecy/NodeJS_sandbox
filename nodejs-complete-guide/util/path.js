const path = require('path');

//gets the path of the main module which started our application, in this case 'app.js'
module.exports = path.dirname(process.mainModule.filename);
