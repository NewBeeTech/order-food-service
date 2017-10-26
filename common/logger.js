const path = require('path')
const log4js = require('log4js')

const config = require('../config')

const logger = log4js.getLogger('food')

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    food: { type: 'file', filename: path.join(config.log_dir, 'food.log') }
  },
  categories: {
    default: { appenders: [ 'out', 'food' ], level: config.debug ? 'DEBUG' : 'ERROR' }
  }
})

module.exports = logger
