/*
 * @author: zimyuan
 * @last-edit-date: 2015-09-13
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	BaseModel = require('./base_model');

var FlightSchema = new Schema({
	flight_number: {type: String},					// 航班编号
	seat_count: {type: Number}, 					// 飞机容纳人数
	
	starttime: {type: Date, default: Date.now},		// 起飞时间
	endtime: {type: Date, default: Date.now},		// 降落时间
	
	startcity: {type: String},						// 出发城市
	endcity: {type: String},						// 降落城市
		
	common_price: {type: Number},					// 普通舱价格
	hight_price: {type: Number},					// 头等舱价格
	discount: {type: Number},						// 折扣信息

	start_airport: {type: String},					// 起飞机场
	end_airport: {type: String }, 					// 降落机场

	create_at: {type: Date, default: Date.now},		// 航班创建时间	
    update_at: {type: Date, default: Date.now},		// 航班更新时间
});

FlightSchema.plugin(BaseModel);
mongoose.model('Flight', FlightSchema);
