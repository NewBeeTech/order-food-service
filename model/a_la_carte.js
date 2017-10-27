// 单点菜单

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var aLaCarteSchema = new Schema({
  // An "anything goes" SchemaType
  _id: Schema.Types.Mixed,
  operateTime: Date,
  operator: String,
  category: {                 // 分类
    name: String,
    chineseName: String
  },
  categoryNum: Number,        // 分类顺序
  description: String,        // 配料
  extraInfo: String,          // 附加信息
  image: String,              // 图片
  name: {                     // 名称
    name: String,
    chineseName: String,
  },
  options: {
    checkbox: {
      content: [{             // 选项内容
        // name: String,
        // chineseName: String,
        // price: Number,
      }], 
      title: {                // 选项标题
        name: String,
        chineseName: String,
      }
    },
    radio: {
      content: [{             // 选项内容
        // name: String,
        // chineseName: String,
      }], 
      title: {                // 选项标题
        name: String,
        chineseName: String,
      }
    }
  },
  price: Number,               // 价格
  stock: Number,               // 库存（暂未用到）
})

mongoose.model('ALaCarte', aLaCarteSchema, 'a_la_carte')
