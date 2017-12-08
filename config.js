var path = require('path')
module.exports = {
  port: 8090,

  // TODO: 部署时请根据需要更改配置
  log: {
    dir: path.join(__dirname, '.logs'),
    level: 'DEBUG',
    appenders: ['console', 'file']
  },

  // TODO: 部署时请根据需要更改配置
  db: {
    // url: 'mongodb://root:xxxxx@dds-bp12f333bc784c141173.mongodb.rds.aliyuncs.com:3717,' +
    // 'dds-bp12f333bc784c142459.mongodb.rds.aliyuncs.com:3717/admin?replicaSet=mgset-4725333',
    url: 'mongodb://localhost/food',
    poolSize: 6,
  },

  // TODO: 部署时请根据需要更改配置
  auth: {
    uri: 'https://api.weixin.qq.com/sns/jscode2session',
    appid: 'xxx',
    secret: 'xxx',
  },

  // TODO: 部署时请根据需要更改配置
  session: {
    key: 'food_default_key',
    maxAge: 24 * 60 * 1000 * 60, // 单位是毫秒
  }
}
