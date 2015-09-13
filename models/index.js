/*
 * @ author: zimyuan
 * @last-edit-date: 2015-09-12
 */

var mongoose = require('mongoose');
var config = require('../config.js');

mongoose.connect(config.db, function(err) {
	if (err) {
		console.log('connect to %s error', config.db, err.message);
	}
});

require('./user.js');
require('./flight.js');
require('./order.js');

exports.User = mongoose.model('User');
exports.Flight = mongoose.model('Flight');
exports.Order = mongoose.model('Order');
