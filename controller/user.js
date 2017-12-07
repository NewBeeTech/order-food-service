const common = require('../common')
const model = require('../model')
const _ = require('lodash')
const async = require('async')

module.exports = {
  /*
   * 获取用户的历史订单
   */
  getOrderList: function(req, res, next) {
    var filter = {openid: req._internal.openid}
    model.Order
      .find(filter)
      .select('-__v')
      .exec(function(err, r) {
        if (err) {
          return common.failRes(res, err.message)
        }
        var result = []
        r.forEach(o => {
          var order = o.toObject()
          try {
            order.orderDetail = JSON.parse(order.orderDetail)
          }
          catch (e) {
            // ignore
          }
          result.push(order)
        })
        common.successRes(res, result)
      })
  },
}
