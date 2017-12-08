const common = require('../common')
const model = require('../model')
const _ = require('lodash')
const async = require('async')
const moment = require('moment')

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
    // fill openid
    order.openid = req._internal.openid

    async.waterfall([
    (next) => {
      model.Restaurant
        .findById(order.restaurantId)
        .select('-__v')
        .exec(next)
    },
    (restaurant, next) => {
      if (!restaurant) {
        return common.failRes(res, '餐厅不存在')
      }
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
        var order = r.toObject()
        try {
          order.orderDetail = JSON.parse(order.orderDetail)
          order.createdTime = moment(order.createdTime).format('YYYY-MM-DD')
        }
        catch (e) {
          // ignore
        }
        common.successRes(res, order)
      })
  },
}
