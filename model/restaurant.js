// 餐厅

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var restaurantSchema = new Schema({
  _id: Schema.Types.Mixed,
  operateTime: Date,
  operator: String,
  menuId: Schema.Types.Mixed,   // 餐厅对应的菜单id
  // 餐厅列表需要的内容 begin
  city: {                        // 餐厅所属城市
    name: String,
    chineseName: String,
  },                             // 餐厅所属国家
  country: {
    name: String,
    chineseName: String,
  },
  cuisines: [String],               // 餐厅标签
  mainImage: String,             // 餐厅主图
  name: String,                  // 餐厅名称
  priceLevel: Number,            // 餐厅消费水平
  rating: Number,                // 餐厅星级，支持半星
  // 餐厅列表需要的内容 end 
  address: String,               // 餐厅地址
  desc: String,                  // 餐厅描述 与UI端确认是否支持换行符
  detailImage: [String],         // 餐厅细节图
  notes: String,                 // 餐厅提示
  phoneNumber: String,           // 餐厅联系方式
  position: String,              // 餐厅位置（经纬度）
  isVisible: Boolean,            // 是否可见
})
restaurantSchema.index({'city.name': 1, 'country.name': 1})
mongoose.model('Restaurant', restaurantSchema, 'restaurant')
