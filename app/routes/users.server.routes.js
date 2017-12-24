// const users = require('../../app/controllers/users.server.controller');
// const passport = require('passport');



// // module.exports = function(app){
// // 	app.route('/users')
// // 	.post(users.create)
// // 	.get(users.list);
	
// // 	app.route('/users/:userId')
// // 	.get(users.read)
// // 	.put(users.update)
// // 	.delete(users.delete);
	
// // 	app
// // 	.param('userId',users.userByID);
// // };

// module.exports = function(app) {
// 	app.route('/signup')
// 	.get(users.renderSignup)
// 	.post(users.signup);

// 	app.route('/signin')
// 	.get(users.renderSignin)
// 	.post(passport.authenticate('local', {
// 			successRedirect: '/',
// 			failureRedirect: '/signin',
// 			failureFlash: true
// 		}));
// 	app.get('/signout', users.signout);
// };

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'signup' routes 
	// app.route('/signup')
	//    .get(users.renderSignup)
	//    .post(users.signup);

	app.route('/api/auth/signup').post(users.signup);
	app.route('/api/auth/signin').post(users.signin);
	app.route('/api/auth/signout').get(users.signout);



	// Set up the 'signin' routes 
	// app.route('/signin')
	//    .get(users.renderSignin)
	//    .post(passport.authenticate('local', {
	// 		successRedirect: '/',
	// 		failureRedirect: '/signin',
	// 		failureFlash: true
	//    }));

	// Set up the Facebook OAuth routes 
	app.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/signin'
	}));
	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	// // Set up the Twitter OAuth routes 
	// app.get('/oauth/twitter', passport.authenticate('twitter', {
	// 	failureRedirect: '/signin'
	// }));
	// app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
	// 	failureRedirect: '/signin',
	// 	successRedirect: '/'
	// }));

	// // Set up the Google OAuth routes 
	// app.get('/oauth/google', passport.authenticate('google', {
	// 	scope: [
	// 		'https://www.googleapis.com/auth/userinfo.profile',
	// 		'https://www.googleapis.com/auth/userinfo.email'
	// 	],
	// 	failureRedirect: '/signin'
	// }));
	// app.get('/oauth/google/callback', passport.authenticate('google', {
	// 	failureRedirect: '/signin',
	// 	successRedirect: '/'
	// }));

	// Set up the 'signout' route
	// app.get('/signout', users.signout);
};


// from index.ejs
// <!-- <body>
// 		<% if ( userFullName ) { %>
// 			<h2>Hello <%=userFullName%> </h2>
// 			<a href="/signout">Sign out</a>
// 		<% } else { %>
// 			<a href="/signup">Signup</a>
// 			<a href="/signin">Signin</a>
// 		<% } %>
// 		<br>
// 			<img src="img/logo.png" alt="Logo">
// 	</body> -->
