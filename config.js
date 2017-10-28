var path = require('path')
module.exports = {
  session_key: 'food_default_key',

  port: 80,

  // TODO: 根据NODE_ENV设置不同的配置
  log: {
    dir: path.join(__dirname, '.logs'),
    level: 'DEBUG',
    appenders: ['console', 'file']
  },
}
