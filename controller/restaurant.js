const common = require('../common')

module.exports = {
  /*
   * 根据城市筛选餐厅列表
   */
  listByCity: function(req, res, next) {
    var data = {
      "rows": [
        {
          "_id": "xxx1",
          "name": "Byran",
          "cuisines": ["美国菜"],
          "rating": 4.5,
          "priceLevel": 3,
          "city": {
            "name": "New York",
            "chineseName": "纽约"
          },
          "country": {
            "name": "US",
            "chineseName": "美国"
          },
          "mainImage": "https://pro.modao.cc" +
          "/uploads3/images/1289/12896118/raw_1505974928.jpeg"
        }
      ],
      "total": 28
    }
    common.successRes(res, data)
  },

  /*
   * 获取餐厅详细信息(聚合了单品和套餐)
   */
  getAggDetail: function(req, res, next) {
    common.successRes(res, {})
  },

  // TODO: ....
}
