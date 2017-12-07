const model = require('../model')

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
    for(var i=0; i<result.length; i++) {
      var r = result[i]
      if (r.session[sessionid]) {
        req._internal = r.session[sessionid]
      }
    }
    if (req._internal) {
      return next()
    }
    return res.status(401).send('请先登录')
  })
}
