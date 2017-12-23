module.exports = {
	//Development configuration options
	db:'mongodb://localhost/mean-development',
	sessionSecret:'developmentSessionSecret',
	facebook: {
		clientID: '522647768110156',
		clientSecret: '625f427ffff9e79e2d94bc8b0e68f669',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	}

};