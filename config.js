var path = require('path')
module.exports = {
  session_key: 'food_default_key',

  port: 30001,

  log_dir: path.join(__dirname, '.logs'),

  debug: true,
}
