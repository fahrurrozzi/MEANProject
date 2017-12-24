// const User = require('mongoose').model('User');
// const passport = require('passport');


// function getErrorMessage(err) {
// 	let message = '';

// 	if (err.code) {
// 		switch (err.code) {
// 			case 11000:
// 			case 11001:
// 				message = 'Username already exists';
// 				break;
// 			default:
// 				message = 'Something went wrong';
// 		}
// 	} else {
// 		for (var errName in err.errors) {
// 			if (err.errors[errName].message) message = err.errors[errName].message;
// 		}
// 	}
// 	return message;
// };

// exports.renderSignin = function(req, res, next) {
// 	if (!req.user) {
// 		res.render('signin', {
// 			title: 'Sign-in Form',
// 			messages: req.flash('error') || req.flash('info')
// 		});
// 	} else {
// 		return res.redirect('/');
// 	}
// };

// exports.renderSignup = function(req, res, next) {
// 	if (!req.user) {
// 		res.render('signup', {
// 			title: 'Sign-up Form',
// 			messages: req.flash('error')
// 		});
// 	} else {
// 		return res.redirect('/');
// 	}
// };

// exports.signup = function(req, res, next) {
// 	if (!req.user) {
// 		const user = new User(req.body);
// 		var message=null;


// 		user.provider = 'local';
// 		user.save((err) => {
// 			if (err) {
// 				var message = getErrorMessage(err);
// 				req.flash('error', message);
// 				return res.redirect('/signup');
// 			}
// 			req.login(user, (err) => {
// 				if (err) return next(err);
// 				return res.redirect('/');
// 			});
// 		});
// 	} else {
// 		return res.redirect('/');
// 	}
// };

// exports.signout = function(req, res) {
// 	req.logout();
// 	res.redirect('/');
// };

// // exports.create = function(req, res, next){
// // 	const user = new User(req.body);

// // 	user.save((err)=>{
// // 		if (err) {
// // 			return next(err);
// // 		} else {
// // 			res.status(200).json(user);
// // 		}
// // 	});
// // };

// // exports.list = function(req, res, next) {
// // 	User.find({}, (err, users) => {
// // 		if (err) {
// // 			return next(err);
// // 		} else {
// // 			res.status(200).json(users);
// // 		}
// // 	});
// // };

// // exports.read = function(req, res) {
// // 	res.json(req.user);
// // 	};

// // exports.userByID = function(req, res, next, id) {
// // 	User.findOne({
// // 		_id: id
// // 	}, (err, user) => {
// // 		if (err) {
// // 			return next(err);
// // 		} else {
// // 			req.user = user;
// // 	next();
// // 	}
// // });
// // };

// // exports.update = function(req, res, next) {
// // 	User.findByIdAndUpdate(req.user.id, req.body, {
// // 		'new': true
// // 	}, (err, user) => {
// // 		if (err) {
// // 			return next(err);
// // 		} else {
// // 			res.status(200).json(user);
// // 	}
// // });
// // };

// // exports.delete = function(req, res, next) {
// // 	req.user.remove(err => {
// // 		if (err) {
// // 			return next(err);
// // 		} else {
// // 			res.status(200).json(req.user);
// // 		}
// // 	})
// // };


// Load the module dependencies
// var User = require('mongoose').model('User'),
// 	passport = require('passport');

// // Create a new error handling controller method
// var getErrorMessage = function(err) {
// 	// Define the error message variable
// 	var message = '';

// 	// If an internal MongoDB error occurs get the error message
// 	if (err.code) {
// 		switch (err.code) {
// 			// If a unique index error occurs set the message error
// 			case 11000:
// 			case 11001:
// 				message = 'Username already exists';
// 				break;
// 			// If a general error occurs set the message error
// 			default:
// 				message = 'Something went wrong';
// 		}
// 	} else {
// 		// Grab the first error message from a list of possible errors
// 		for (var errName in err.errors) {
// 			if (err.errors[errName].message) message = err.errors[errName].message;
// 		}
// 	}

// 	// Return the message error
// 	return message;
// };

// // Create a new controller method that renders the signin page
// // exports.renderSignin = function(req, res, next) {
// // 	// If user is not connected render the signin page, otherwise redirect the user back to the main application page
// // 	if (!req.user) {
// // 		// Use the 'response' object to render the signin page
// // 		res.render('signin', {
// // 			// Set the page title variable
// // 			title: 'Sign-in Form',
// // 			// Set the flash message variable
// // 			messages: req.flash('error') || req.flash('info')
// // 		});
// // 	} else {
// // 		return res.redirect('/');
// // 	}
// // };

// // // Create a new controller method that renders the signup page
// // exports.renderSignup = function(req, res, next) {
// // 	// If user is not connected render the signup page, otherwise redirect the user back to the main application page
// // 	if (!req.user) {
// // 		// Use the 'response' object to render the signup page
// // 		res.render('signup', {
// // 			// Set the page title variable
// // 			title: 'Sign-up Form',
// // 			// Set the flash message variable
// // 			messages: req.flash('error')
// // 		});
// // 	} else {
// // 		return res.redirect('/');
// // 	}
// // };

// exports.signin = function(req, res, next) {
// 	passport.authenticate('local', function(err, user, info) {
// 		if (err || !user) {
// 			res.status(400).send(info);
// 		} else {
// 			// Remove sensitive data before login
// 			user.password = undefined;
// 			user.salt = undefined;
// 			req.login(user, function(err) {
// 				if (err) {
// 					res.status(400).send(err);
// 				} else {
// 					res.json(user);
// 				}
// 			});
// 		}
// 	})(req, res, next);
// };

// // Create a new controller method that creates new 'regular' users
// // exports.signup = function(req, res, next) {
// // 	// If user is not connected, create and login a new user, otherwise redirect the user back to the main application page
// // 	if (!req.user) {
// // 		// Create a new 'User' model instance
// // 		var user = new User(req.body);
// // 		var message = null;

// // 		// Set the user provider property
// // 		user.provider = 'local';

// // 		// Try saving the new user document
// // 		user.save(function(err) {
// // 			// If an error occurs, use flash messages to report the error
// // 			if (err) {
// // 				// Use the error handling method to get the error message
// // 				var message = getErrorMessage(err);

// // 				// Set the flash messages
// // 				req.flash('error', message);

// // 				// Redirect the user back to the signup page
// // 				return res.redirect('/');
// // 			}

// // 			// If the user was created successfully use the Passport 'login' method to login
// // 			req.login(user, function(err) {
// // 				// If a login error occurs move to the next middleware
// // 				if (err) return next(err);

// // 				// Redirect the user back to the main application page
// // 				return res.redirect('/signup');
// // 			});
// // 		});
// // 	} else {
// // 		return res.redirect('/');
// // 	}
// // };

// exports.signup = function(req, res) {
// 	const user = new User(req.body);
// 	user.provider = 'local';
// 	user.save((err) => {
// 		if (err) {
// 			return res.status(400).send({
// 				message: getErrorMessage(err)
// 			});
// 		} else {
// 		// Remove sensitive data before login
// 			user.password = undefined;
// 			user.salt = undefined;
// 			req.login(user, function(err) {
// 				if (err) {
// 					res.status(400).send(err);
// 				} else {
// 					res.json(user);
// 				}
// 			});
// 		}
// 	});
// };

// exports.saveOAuthUserProfile = function(req, profile, done) {
// 	// Try finding a user document that was registered using the current OAuth provider
// 	User.findOne({
// 		provider: profile.provider,
// 		providerId: profile.providerId
// 	}, function(err, user) {
// 		// If an error occurs continue to the next middleware
// 		if (err) {
// 			return done(err);
// 		} else {
// 			// If a user could not be found, create a new user, otherwise, continue to the next middleware
// 			if (!user) {
// 				// Set a possible base username
// 				var possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

// 				// Find a unique available username
// 				User.findUniqueUsername(possibleUsername, null, function(availableUsername) {
// 					// Set the available user name 
// 					profile.username = availableUsername;
					
// 					// Create the user
// 					user = new User(profile);

// 					// Try saving the new user document
// 					user.save(function(err) {
// 						// Continue to the next middleware
// 						return done(err, user);
// 					});
// 				});
// 			} else {
// 				// Continue to the next middleware
// 				return done(err, user);
// 			}
// 		}
// 	});
// };


// // Create a new controller method that creates new 'OAuth' users
// // exports.saveOAuthUserProfile = function(req, profile, done) {
// // 	// Try finding a user document that was registered using the current OAuth provider
// // 	User.findOne({
// // 		provider: profile.provider,
// // 		providerId: profile.providerId
// // 	}, function(err, user) {
// // 		// If an error occurs continue to the next middleware
// // 		if (err) {
// // 			return done(err);
// // 		} else {
// // 			// If a user could not be found, create a new user, otherwise, continue to the next middleware
// // 			if (!user) {
// // 				// Set a possible base username
// // 				var possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

// // 				// Find a unique available username
// // 				User.findUniqueUsername(possibleUsername, null, function(availableUsername) {
// // 					// Set the available user name 
// // 					profile.username = availableUsername;
					
// // 					// Create the user
// // 					user = new User(profile);

// // 					// Try saving the new user document
// // 					user.save(function(err) {
// // 						// Continue to the next middleware
// // 						return done(err, user);
// // 					});
// // 				});
// // 			} else {
// // 				// Continue to the next middleware
// // 				return done(err, user);
// // 			}
// // 		}
// // 	});
// // };

// // Create a new controller method for signing out
// exports.signout = function(req, res) {
// 	// Use the Passport 'logout' method to logout
// 	req.logout();

// 	// Redirect the user back to the main application page
// 	res.redirect('/');
// };

const User = require('mongoose').model('User'),
	passport = require('passport');
const getErrorMessage = function(err) {
	const message = '';
	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
			message = 'Username already exists';
			break;
			default:
			message = 'Something went wrong';
		}
	} else {
		for (let errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}
	return message;
};
exports.signin = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if (err || !user) {
			res.status(400).send(info);
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;
			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user);
				}
			});
		}
	})(req, res, next);
};


exports.signup = function(req, res) {
	const user = new User(req.body);
	user.provider = 'local';
	user.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;
			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user);
				}
			});
		}
	});
};

exports.signout = function(req, res) {
	req.logout();
	res.redirect('/');
};

exports.saveOAuthUserProfile = function(req, profile, done) {
	User.findOne({
		provider: profile.provider,
		providerId: profile.providerId
	}, function(err, user) {
		if (err) {
			return done(err);
		} else {
			if (!user) {
				const possibleUsername = profile.username ||
				((profile.email) ? profile.email.split('@')[0] : '');
				User.findUniqueUsername(possibleUsername, null,
				function(availableUsername) {
					profile.username = availableUsername;
					user = new User(profile);
					user.save((err) => {
						if (err) {
							const message = _this.getErrorMessage(err);
							req.flash('error', message);
							return res.redirect('/signup');
						}
						return done(err, user);
					});
				});
			} else {
				return done(err, user);
			}
		}
	});
};




