const config = require('./config');
const mongoose = require('mongoose');

module.exports = function(){
	var db = mongoose.connect(config.db);

	require('../app/models/user.server.model');
	return db;
};