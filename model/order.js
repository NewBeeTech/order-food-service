// 订单

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var orderSchema = new Schema({
  createdTime: Date,
  openid: String, // 所属用户
  restaurantId: Schema.Types.Mixed, // 所属餐厅id
  restaurantName: String, // 餐厅名称
  country: String, // 餐厅所属国家
  city: String, // 餐厅所属城市
  orderDetail: String, // 订单详细信息
})

orderSchema.index({openid: 1})
mongoose.model('Order', orderSchema, 'order')
