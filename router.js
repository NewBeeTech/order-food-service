var express = require('express')
var router = express.Router()

var requireGlob = require('require-glob')
var controller = requireGlob.sync(['controller/*.js'])

registerRouter(router, '/api', controller)

function registerRouter(router, path_prefix, controller) {
  if (typeof controller !== 'object') {
    return
  }
  Object.keys(controller).forEach(function(key) {
    var path = path_prefix + '/' + key
    if (typeof controller[key] !== 'function') {
      return registerRouter(router, path, controller[key])
    }
    router.use(path, function(req, res, next) {
      req.body = req.method === 'GET' ? req.query : req.body
      controller[key].call(this, req, res, next)
    })
  })
}

module.exports = router
