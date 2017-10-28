const common = require('../common')
const model = require('../model')

module.exports = {
  /*
   * 获取城市列表
   */
  list: function(req, res, next) {
    model.City
      .find({})
      .select('-__v')
      .exec(function(err, result) {
        if (err) {
          return common.failRes(res, err.message)
        }
        common.successRes(res, result)
      })
  },
}
