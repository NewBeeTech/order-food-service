const common = require('../common')
const model = require('../model')
const _ = require('lodash')
const async = require('async')

module.exports = {
  /*
   * 根据城市筛选餐厅列表
   */
  listByCity: function(req, res, next) {

    var filter = _.pick(req.body, ['city.name', 'country.name'])
    // 添加默认筛选条件
    filter.isVisible = true
    var skip = Number((req.body.pageNo-1) * req.body.pageSize || 0)
    var limit = Number(req.body.pageSize || 9)

    async.waterfall([
    // 获取总数
    (next) => {
      model.Restaurant.count(filter, next)
    },
    // 根据城市筛选餐厅列表（按照餐厅星级倒序排列）
    (count, next) => {
      model.Restaurant
        .find(filter)
        .select('-__v')
        .skip(skip)
        .limit(limit)
        .sort({rating: -1})
        .exec(function(err, result) {
          if (err) {
            return common.failRes(res, err.message)
          }
          common.successRes(res, {rows: result, total: count})
        })
    },
    ], function(err) {
      return common.failRes(res, err.message)
    })
  },

  /*
   * 获取餐厅详细信息(聚合了单品和套餐)
   */
  getDetail: function(req, res, next) {

    var result = {}
    var menu
    async.waterfall([
    // 根据id获取餐厅详情
    (next) => {
      model.Restaurant
        .findById(req.body._id)
        .select('-__v')
        .exec(next)
    },
    // 根据menuId获取菜单
    (restaurant, next) => {
      if (!restaurant) {
        return common.failRes(res, '获取餐厅信息失败')
      }
      result = restaurant.toObject()
      model.Menu.findById(restaurant.menuId, next)
    },
    // 获取菜单下的单品信息
    (_menu, next) => {
      menu = _menu
      model.MenuItem
        .find({_id: {$in: menu.aLaCarte}})
        .select('-__v')
        .sort({categoryNum: 1, menuItemNum: 1})
        .exec(next)
    },
    (aLaCartes, next) => {
      aLaCartes = local.transformALaCarte(aLaCartes)
      result.aLaCarte = _.groupBy(aLaCartes, o => {
        return o.category.chineseName
      })

      // 获取菜单下的套餐信息
      model.SetMenu
        .find({_id: {$in: menu.setMenu}})
        .select('-__v')
        .exec(next)
    },
    (setMenus, next) => {
      // 获取套餐下的单品信息
      result.setMenus = {}
      async.eachSeries(setMenus, (setMenu, nextSetMenu) => {
        setMenu = setMenu.toObject()
        model.MenuItem
          .find({_id: {$in: setMenu.setMenuDetail}})
          .select('-__v')
          .sort({categoryNum: 1, menuItemNum: 1})
          .exec((err, cartes) => {
            if (err) {
              return nextSetMenu(err)
            }
            cartes = local.transformALaCarte(cartes)
            setMenu.setMenuDetail = _.groupBy(cartes, o => {
              return o.category.chineseName
            })
            // 默认选中菜系里的第一个
            for(var key in setMenu.setMenuDetail) {
              setMenu.setMenuDetail[key][0].checked = true
            }
            
            result.setMenus[setMenu.name.chineseName] = setMenu
            nextSetMenu()
          })
      }, next)
    },
    (next) => {
      common.successRes(res, result)
      common.logger.info('成功获取餐厅详情，餐厅id：', req.body._id)
    },
    ], function(err) {
      return common.failRes(res, err.message)
    })
  },
}

var local = {
  transformALaCarte(aLaCartes) {
    var result = []
    aLaCartes.forEach(c => {
      var o = c.toObject()
      var new_options = {}
      if (o.options.radio && o.options.radio.content.length > 0) {
        new_options.radio = o.options.radio
      }
      if (o.options.checkbox && o.options.checkbox.content.length > 0) {
        new_options.checkbox = o.options.checkbox
      }
      o.options = new_options
      if (o.options.radio) {
        o.options.radio.content.forEach(c => {
          if (!c.price) {
            c.price = 0
          }
        })
        var min = _.minBy(o.options.radio.content, c => {
          return c.price
        })
        min.default = min.checked = true
      }

      if (!o.price) {
        o.price = 0
      }
      result.push(o)
    })
    return result
  }

}