const mongoose = require('mongoose')
const config   = require('../config')
const logger = require('../common').logger
mongoose.Promise = global.Promise;

mongoose.connect(config.db.url, {
useMongoClient: true,
poolSize: config.poolSize,
}).then(
  () => {
    logger.info('connect to %s success', config.db.url)
  }, 
  (err) => {
    logger.error('connect to %s error: ', config.db.url, err.message);
    process.exit(1);
  }
)

// models
require('./a_la_carte')
require('./city')
require('./menu')
require('./order')
require('./restaurant')
require('./set_menu')

exports.ALaCarte         = mongoose.model('ALaCarte')
exports.City             = mongoose.model('City')
exports.Menu             = mongoose.model('Menu')
exports.Order            = mongoose.model('Order')
exports.Restaurant       = mongoose.model('Restaurant')
exports.SetMenu          = mongoose.model('SetMenu')
