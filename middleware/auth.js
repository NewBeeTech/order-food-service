const model = require('../model')
const logger = require('../common').logger
const moment = require('moment')
const config =  require('../config')

const auth_paths = [
  '/api/order/save',
  '/api/user/getOrderList',
]

module.exports = function(req, res, next) {
  if (auth_paths.indexOf(req.path) <= -1) {
    return next()
  }
  var sessionid = req.headers['sessionid']
  if (!sessionid) {
    return res.status(401).send('请先登录')
  }

  model.Session.find({}).exec(function(err, result) {
    var session_content;
    var session_obj;

    for(var i=0; i<result.length; i++) {
      var r = result[i] && JSON.parse(result[i].session)
      if (r[sessionid]) {
        session_content = r[sessionid]
        session_obj = result[i]
      }
    }
    if (!session_content) {
      return res.status(200).send({code: -2, message: "sessionid已失效"})
    }

    // 刷新过期时间
    model.Session.update(
      {_id: session_obj._id},
      {expires: moment().add('milliseconds', config.session.maxAge).toDate()},
      function(err) {
        if (err) {
          logger.error("刷新过期时间失败")
        }
        req._internal = session_content
        next()
    })
  })
}
