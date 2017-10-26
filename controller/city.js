const common = require('../common')

module.exports = {
  /*
   * 获取城市列表
   */
  list: function(req, res, next) {
    var data = [
      {
        "city": [
          {
            "chineseName": "纽约",
            "name": "New York"
          },
          {
            "chineseName": "华盛顿",
            "name": "Washington"
          }
        ],
        "country": {
          "chineseName": "美国",
          "currencyType": "$",
          "name": "US"
        }
      }
    ]
    common.successRes(res, data)
  },
}
