const common = require('../common')

module.exports = {
  /*
   * 保存订单信息
   */
  save: function(req, res, next) {
    common.successRes(res, {})
  },

  /*
   * 获取订单详情
   */
  getDetail: function(req, res, next) {
    var data = {
      "_id": "twqonwiob",
      "order_detail": "好复杂一个字符串"
    }
    common.successRes(res, data)
  },
}
