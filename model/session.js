// session

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var sessionSchema = new Schema({
  _id: String,
  session: Schema.Types.Mixed,
  expires: Date,
})

mongoose.model('Session', sessionSchema, 'sessions')
