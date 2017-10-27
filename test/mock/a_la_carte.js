const _ = require('lodash')

var aLaCarte = {
  "_id": "aLaCarte_001",
  "operateTime": new Date(),
  "operator": "UT-TESTER",
  "category": {
    "chineseName": "头菜",
    "name": "The first dash"
  },
  "categoryNum": 1,
  "description": "配料信息mock数据",
  "extraInfo": "附加信息mock数据",
  "image": "https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg",
  "name": {
    "chineseName": "面包和橄榄",
    "name": "Bread and Olives"
  },
  "options": {
    "checkbox": {
      "content": [
        {
          "chineseName": "炸薯条",
          "name": "French fries",
          "price": 3
        }
      ],
      "title": {
        "chineseName": "配菜",
        "name": "Garnish"
      }
    },
    "radio": {
      "content": [
        {
          "chineseName": "蒸",
          "name": "Steam"
        }
      ],
      "title": {
        "chineseName": "做法",
        "name": "Cooking Method"
      }
    }
  },
  "price": 3,
  "stock": 6,
}

var arr = []
// 头菜
for(var i=0; i<3; i++) {
  var o = _.cloneDeep(aLaCarte)
  arr.push(Object.assign(o, {
    _id: 'aLaCarte_00' +i,
    category: {
      chineseName: '头菜',
      name: 'The first dash',
    },
    categoryNum: 1,
    name: {
      chineseName: '面包和橄榄' + i,
      name: 'Bread and Olives' + i
    }
  }))
}
// 主菜
for(var i=3; i<6; i++) {
  var o = _.cloneDeep(aLaCarte)
  arr.push(Object.assign(o, {
    _id: 'aLaCarte_00' +i,
    category: {
      chineseName: '主菜',
      name: 'The Main dash',
    },
    categoryNum: 2,
    name: {
      chineseName: '大龙虾' + i,
      name: 'xxxx' + i
    }
  }))
}

module.exports = arr


