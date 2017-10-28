// 套餐菜单

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var setMenuSchema = new Schema({
  _id: Schema.Types.Mixed,
  operateTime: Date,
  operator: String,
  setMenuDetail: [Schema.Types.Mixed], //此套餐下含有的单品id
  desc: String, // 套餐描述
  name: { // 套餐名称
  	name: String,
  	chineseName: String,
  }, 
  price: String, //	套餐价格 TODO: 待确定
})

mongoose.model('SetMenu', setMenuSchema, 'set_menu')
