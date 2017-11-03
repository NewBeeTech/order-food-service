const common = require('../common')
const model = require('../model')
const _ = require('lodash')
const async = require('async')

module.exports = {
  /*
   * 保存订单信息
   */
  save: function(req, res, next) {

    var order = _.pick(req.body, ['restaurantId', 'orderDetail'])
    if (!order.restaurantId || !order.orderDetail) {
      return common.failRes(res, 'parameters is insufficient')
    }

    // fill default field
    order.createdTime = new Date()
    // TODO: fill openid
    order.openid = 'test_user'

    async.waterfall([
    (next) => {
      model.Restaurant
        .findById(order.restaurantId)
        .select('-__v')
        .exec(next)
    },
    (restaurant, next) => {
      // fill restaurant info
      order.restaurantName = restaurant.name
      order.city = restaurant.city
      order.country = restaurant.country

      // save order to db
      order = new model.Order(order)
      order.save(next)
    },
    (result, next) => {
      common.successRes(res, {_id: result._id}, '订单保存成功')
    },
    ], function(err) {
      common.failRes(res, err.message)
    })
  },

  /*
   * 获取订单详情
   */
  getDetail: function(req, res, next) {
    model.Order
      .findById(req.body._id)
      .select('-__v')
      .exec(function(err, r) {
        if (err) {
          return common.failRes(res, err.message)
        }
        common.successRes(res, r)
      })
  },
}
