/*
 * @author: zimyuan
 * @last-edit-date: 2015-09-13
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	BaseModel = require('./base_model');

var UserSchema = new Schema({
	// account mesage
	loginname: {type: String},						// 登录名，真实名字
	password: {type: String},						// 用户密码
	
	// base message	
	identitynumber: {type: String},					// 身份证号码
	phone: {type: String},							// 手机号码
	location: {type: String, default: ''},			// 城市
	male: {type: String, default: ''},				// 性别
});

UserSchema.plugin(BaseModel);
UserSchema.index({loginname: 1}, {unique: true});

mongoose.model('User', UserSchema);
