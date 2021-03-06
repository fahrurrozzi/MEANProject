
// const config = require('./config');
// const express = require('express');
// const morgan = require('morgan');
// const compress = require('compression');
// const bodyParser = require('body-parser');
// const methodOverride=require('method-override');

// const session = require('express-session');

// const flash = require('connect-flash');

// const passport = require('passport');

// //const uri = 'mongodb://localhost/mean-book';
// //const db = require('mongoose').connect(uri);





// module.exports=function(){
// 	var app = express();
// 	if (process.env.NODE_ENV==='development'){
// 		app.use(morgan('dev'));
// 	} else if (process.env.NODE_ENV==='production'){
// 		app.use(compress());
// 	}

// 	app.use(bodyParser.urlencoded({
// 		extended :true
// 	}));

// 	app.use(bodyParser.json());
// 	app.use(methodOverride());

// 	app.use(session({
// 		saveUninitialized:true,
// 		resave:true,
// 		secret:config.sessionSecret
// 	}));


// 	app.set('views','./app/views');
// 	app.set('view engine','ejs');

// 	app.use(flash());
// 	app.use(passport.initialize());
// 	app.use(passport.session());


// 	require('../app/routes/index.server.routes.js')(app);

// 	require('../app/routes/users.server.routes.js')(app);



// 	app.use(express.static('./public'));

// 	return app;
// };

var path = require('path'),
	config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session'),
	flash = require('connect-flash'),
	passport = require('passport');

// Define the Express configuration method
module.exports = function() {
	// Create a new Express application instance
	var app = express();

	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	// Configure the 'session' middleware
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	// Set the application view engine and 'views' folder
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	// Configure the flash messages middleware
	app.use(flash());

	// Configure the Passport middleware
	app.use(passport.initialize());
	app.use(passport.session());

	

	// Configure static file serving
	app.use('/', express.static(path.resolve('./public')));


	app.use('/lib', express.static(path.resolve('./node_modules')));

	// Load the routing files
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);

	// Return the Express application instance
	return app;
};