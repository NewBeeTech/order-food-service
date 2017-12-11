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
  "position": {
    "type": "Point",
    "coordinates": [35, 67]
  },
  "isVisible": true,
}

var restaurants = []
for(var i=1; i<=4; i++) {
  restaurants.push(Object.assign(_.cloneDeep(r), {
    _id: 'restaurant_00' + i,
    name: 'Byran' + i,
    rating: 5 - i,
  }))
}
restaurants[3].isVisible = false

restaurants.push({
  "_id": "v1_mock_restaurant_01",
  "opreateTime": new Date(),
  "operator": "MOCKER",
  "menuId": "v1_mock_menu_01",
  "city": {
    "chineseName": "伦敦",
    "name": "London"
  },
  "country": {
    "chineseName": "英国",
    "name": "UK"
  },
  "cuisines": [
    "美国菜", "海鲜"
  ],
  "mainImage": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/封面照片.jpg",
  "name": "Burger & Lobster",
  "priceLevel": 3,
  "rating": 4.5,
  "address": "10 Wardour Street, London, W1D 6QF UK",
  "desc": "故事起源于2011年，4个学生时期的朋友在莫斯科一处楼顶喝酒的时候，萌生了打造一家餐馆的想法。这间餐厅只做一"
  + "或两样菜并把菜做到极致。因此在伦敦梅菲尔区的一家小型爱尔兰酒吧里，第一家Burger & Lobster就诞生了。\n"
  + "早餐营业时间：\n"
  + "周一至周五：6.30am-10am \n"
  + "周六、日：7am-10.30am \n"
  + "正餐营业时间：\n"
  + "周一至周四：12:00-22:30 \n"
  + "周五、六：12:00-23:00\n"
  + "周日：12:00-22:00\n",
  "detailImage": [
    "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/Burger&Lobster1.jpg",
    "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/Burger&Lobster2.jpg",
    "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/Burger&Lobster3.jpg"
  ],
  "notes": "",
  "phoneNumber": "0203 2058963",
  "position": {
    "type": "Point",
    "coordinates": [51.5107867, -0.1314353]
  },
  "isVisible": true,
})
module.exports = restaurants
