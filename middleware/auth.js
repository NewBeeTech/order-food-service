const auth_paths = [
  '/api/order/save',
  '/api/user/getOrderList',
]

module.exports = function(req, res, next) {
  if (auth_paths.indexOf(req.path) <= -1) {
    return next()
  }
  var sessionid = req.headers['sessionid']
  if (!req.session[sessionid]) {
    return res.status(401).send('请先登录')
  }
  req._internal = req.session[sessionid]
  next()
}
