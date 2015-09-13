/*
 * @author: zimyuan
 * @last-edit-date: 2015-09-13
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	BaseModel = require('./base_model');

var OrderSchema = new Schema({
	ordernumber: {type: String},					// 订单号
	seat_number: {type: Number}, 					// 座位号

	cabin_type: {type: String},						// 舱类型

	starttime: {type: Date, default: Date.now},		// 起飞时间
	endtime: {type: Date, default: Date.now},		// 降落时间

	start_city: {type: String},					// 出发城市
	end_city: {type: String},						// 降落城市

	start_airport: {type: String},					// 起飞机场
	end_airport: {type: String }, 					// 降落机场

	flight_id: {type: String},						// 订单相关的航班
	ticket_count: {type: Number, default: 1},		// 票的数量	
	
	order_id: {type: String},						// 订单人的id
	create_at: {type: Date, default: Date.now},		// 订单创建时间
});

OrderSchema.plugin(BaseModel);
mongoose.model('Order', OrderSchema);
