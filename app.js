const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const config = require('./config')
const common = require('./common')

const app = express()

// 记录请求时间
app.use(require('./middleware/requestLog'))

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  name: 'skey',
  secret: config.session_key,  // 用来对session id相关的cookie进行签名
  store: new FileStore(),      // 本地存储session（文本文件，也可以选择其他store，比如redis or mongodb的）
  saveUninitialized: false,    // 是否自动保存未初始化的会话，建议false
  resave: false,               // 是否每次都重新保存会话，建议false
  cookie: {
    maxAge: 15 * 60 * 1000     // 有效期，单位是毫秒, 这里设置的是15分钟
  }
}))

// no cache
app.use(function(req, res, next) {
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
	next()
})

app.use(require('./middleware/auth'))
app.use(require('./router'))

app.listen(config.port, function() {
  common.logger.info('app listening on port', config.port)
})
