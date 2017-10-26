const common = require('../common')

module.exports = {
  /*
   * 获取用户基本信息
   */
  getBaseInfo: function(req, res, next) {
    var data = {
      "avatarUrl": "https://pro.modao.cc/uploads3" +
      "/images/1264/12645881/raw_1505274594.jpeg",
      "nickname": "测试内容5e5x"
    }
    common.successRes(res, data)
  },

  /*
   * 获取用户的历史订单
   */
  getOrderList: function(req, res, next) {
    common.successRes(res, {})
  },
}
