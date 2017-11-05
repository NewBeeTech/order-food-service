const common = require('../common')
const config = require('../config')
const request = require('request')
const exec = require('child_process').exec

module.exports = {
  /*
   * 获取第三方session
   */
  getSessionid: function(req, res, next) {

    var code = req.body.code

    var p = {
      uri: config.auth.uri,
      json: true,
      qs: {
        grant_type: 'authorization_code',
        appid: config.auth.appid,
        secret: config.auth.secret,
        js_code: code
      }
    }

    request(p, function(err, response, data) {
      if (err || response.statusCode !== 200 || !data.openid) {
        return common.failRes(res, '获取openid失败, error:' + (err && err.message))
      }
      var cmd = 'head -n 80 /dev/urandom | tr -dc A-Za-z0-9 | head -c 168'
      exec(cmd, function(err, stdout, stderr){
        if (err || !stdout) {
          return common.failRes(res, '获取第三方session失败, error:' + (err && err.message))
        }
        req.session[stdout] = {
          openid: data.openid,
          session_key: data.session_key,
        }
        common.successRes(res, {sessionid: stdout})
      })
    })
  },
}

