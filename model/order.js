// 订单

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var orderSchema = new Schema({
  _id: Schema.Types.Mixed,
  operateTime: Date,
  operator: String,
  openid: String, // 所属用户
  restaurantId: Schema.Types.Mixed, // 所属餐厅id
  order_detail: String, // 订单详细信息
})

orderSchema.index({openid: 1})
mongoose.model('Order', orderSchema, 'order')
