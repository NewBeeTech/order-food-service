const logger = require('../common').logger

module.exports = function(req, res, next) {
  var t = new Date()
  var url = req.url

  logger.info('Started:', url, t.toISOString(), req.method, req.ip)

  res.on('finish', function () {
    var duration = ((new Date()) - t)
    logger.info(
      'Completed:',
      url,
      res.statusCode,
      '(' + duration + 'ms)'
    )
  })
  next()
}
