const common = require('../common')


module.exports = {
  /*
   * 获取第三方session
   */
  get3rdSession: function(req, res, next) {
    res.status(200).send({
      "3rd_session": "xxxxxxxxxx"
    })
  },
}

