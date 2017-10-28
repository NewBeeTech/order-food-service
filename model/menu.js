// 餐厅菜单 多个餐厅可共用一份菜单

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var menuSchema = new Schema({
  _id: Schema.Types.Mixed,
  operateTime: Date,
  operator: String,
  aLaCarte: [Schema.Types.Mixed], // 菜单下含有的单品id
  setMenu: [Schema.Types.Mixed],  // 菜单下含有的套餐id
  desc: String,                   // 菜单描述
})

mongoose.model('Menu', menuSchema, 'menu')
