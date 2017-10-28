// 城市

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var citySchema = new Schema({
  _id: Schema.Types.Mixed,
  operateTime: Date,
  operator: String,
  country:  {
    name: String,
    chineseName: String,
    currencyType: String,
  },
  city: [
    {
      //name: String,
      //chineseName: String,
    }
  ],
})

mongoose.model('City', citySchema, 'city')
