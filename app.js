const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
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
  secret: config.session.key,  // 用来对session id相关的cookie进行签名
  store: new MongoStore({
    url: config.db.url
  }),
  saveUninitialized: false,    // 是否自动保存未初始化的会话，建议false
  resave: false,               // 是否每次都重新保存会话，建议false
  cookie: {
    maxAge: config.session.maxAge,
  }
}))

// no cache
app.use(function(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  next()
})

// auth
app.use(require('./middleware/auth'))
app.use(require('./router'))

app.listen(config.port, function() {
  common.logger.info('app listening on port', config.port)
})
