const path = require('path')
const log4js = require('log4js')
const config = require('../config')

const logger = log4js.getLogger()
log4js.configure({
  appenders: {
    console: {
      type: 'stdout'
    },
    file: {
      type: 'dateFile',
      alwaysIncludePattern: true,
      pattern: '.yyyy-MM-dd.log',
      filename: path.join(config.log.dir, 'order-food-service')
    }
  },
  categories: {
    default: {
      appenders: config.log.appenders,
      level: config.log.level
    }
  }
})

module.exports = logger
