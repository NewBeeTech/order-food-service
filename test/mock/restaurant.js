const _ = require('lodash')

var r = {
  "_id": "restaurant_001",
  "opreateTime": new Date(),
  "operator": "UT-TESTER",
  "menuId": "menu_001",
  "city": {
    "chineseName": "纽约",
    "name": "New York"
  },
  "country": {
    "chineseName": "US",
    "name": "美国"
  },
  "cuisines": [
    "美国菜"
  ],
  "mainImage": "https://pro.modao.cc/uploads3/images/1289/12896118/raw_1505974928.jpeg",
  "name": "Byran",
  "priceLevel": 5,
  "rating": 4.5,
  "address": "33-35 WELLINGTON STREET, LONDON",
  "desc": "本店经营最棒的英国汉堡！我们的汉堡采用精选牛肉...",
  "detailImage": [
    "https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg",
    "https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg"
  ],
  "notes": "本店另外加12.5服务费",
  "phoneNumber": "098-49685",
  "position": "34,56"
}

var restaurants = []
for(var i=1; i<=3; i++) {
  restaurants.push(Object.assign(_.cloneDeep(r), {
    _id: 'restaurant_00' + i,
    name: 'Byran' + i,
    rating: 5 - i,
  }))
}

module.exports = restaurants
