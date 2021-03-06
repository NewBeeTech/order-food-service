const _ = require('lodash')

var aLaCarte = {
  "_id": "menuItem_001",
  "operateTime": new Date(),
  "operator": "UT-TESTER",
  "category": {
    "chineseName": "头菜",
    "name": "The first dash"
  },
  "categoryNum": 1,
  "menuItemNum": 1,
  "description": {
    "name": "",
    "chineseName": "配料信息mock数据"
  },
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
          "name": "Steam",
          "price": 3,
        }
      ],
      "title": {
        "chineseName": "做法",
        "name": "Cooking Method"
      }
    }
  },
  "price": 3,
}

var arr = []
// 头菜
for(var i=0; i<3; i++) {
  var o = _.cloneDeep(aLaCarte)
  arr.push(Object.assign(o, {
    _id: 'menuItem_00' +i,
    category: {
      chineseName: '头菜',
      name: 'The first dash',
    },
    categoryNum: 1,
    menuItemNum: 12 - i,
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
    _id: 'menuItem_00' +i,
    category: {
      chineseName: '主菜',
      name: 'The Main dash',
    },
    categoryNum: 2,
    menuItemNum: 12 - i,
    name: {
      chineseName: '大龙虾' + i,
      name: 'xxxx' + i
    }
  }))
}

arr = arr.concat([
  {
    "_id": "v1_mock_menuItem_001",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "早餐",
      "name": "Breakfast"
    },
    "categoryNum": 1,
    "menuItemNum": 1,
    "description": {
      "name": "Sausage, bacon, mushrooms, tomato, black pudding, beans, hash browns, eggs of your choice and toast",
      "chineseName": "香肠，培根，蘑菇，西红柿，黑布丁，茄汁黄豆，薯饼，自选鸡蛋，吐司面包"
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/1.1FullEnglish.jpg",
    "name": {
      "chineseName": "英式早餐",
      "name": "FULL ENGLISH"
    },
    "options": {
      "checkbox": {
        "content": [
          {
            "chineseName": "荷兰酱",
            "name": "hollandaise",
            "price": 1.5
          },
          {
            "chineseName": "酸面团面包吐司",
            "name": "sour dough toast",
            "price": 1.5
          }
        ],
        "title": {
          "chineseName": "额外配菜",
          "name": "Extras"
        }
      },
      "radio": {
        "content": [
          {
            "chineseName": "溏心鸡蛋",
            "name": "Soft boiled egg",
            "price": 3,
          },
          {
            "chineseName": "水煮嫩蛋",
            "name": "poached egg",
            "price": 3,
          },
          {
            "chineseName": "半熟煎鸡蛋",
            "name": "fried egg – running yolk",
            "price": 3,
          },
          {
            "chineseName": "全熟煎鸡蛋",
            "name": "fried egg–fully cooked",
            "price": 3,
          },
          {
            "chineseName": "西式炒蛋",
            "name": "scrambled egg",
            "price": 3,
          },
        ],
        "title": {
          "chineseName": "自选鸡蛋",
          "name": "Eggs of your choice"
        }
      }
    },
    "price": 3,
  },
  {
    "_id": "v1_mock_menuItem_002",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "早餐",
      "name": "Breakfast"
    },
    "categoryNum": 1,
    "menuItemNum": 2,
    "description": {
      "name": "",
      "chineseName": ""
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/1.2Waffle.jpg",
    "name": {
      "chineseName": "经典华夫饼",
      "name": "CLASSIC WAFFLES"
    },
    "options": {
      "radio": {
        "content": [
          {
            "chineseName": "培根，枫糖和蓝莓",
            "name": "Bacon, maple syrup & blueberries",
            "price": 6
          },
          {
            "chineseName": "糖渍水果和新鲜酸奶",
            "name": "fruit compote & fresh yoghurt",
            "price": 8
          },
          {
            "chineseName": "糖和柠檬",
            "name": "sugar & lemon",
            "price": 3
          },
        ],
        "title": {
          "chineseName": "自选华夫饼",
          "name": "Choice of waffle"
        }
      }
    },
    "price": 8,
  },
  {
    "_id": "v1_mock_menuItem_003",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "前菜",
      "name": "Starter"
    },
    "categoryNum": 2,
    "menuItemNum": 1,
    "description": {
      "name": "With lemon mayo and spicy tomato",
      "chineseName": "配柠檬蛋黄酱和辣西红柿酱"
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/2.1Calamari.jpg",
    "name": {
      "chineseName": "炸鱿鱼圈",
      "name": "CRISPY CALAMARI"
    },
    "price": 7.5,
  },
  {
    "_id": "v1_mock_menuItem_004",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "前菜",
      "name": "Starter"
    },
    "categoryNum": 2,
    "menuItemNum": 2,
    "description": {
      "name": "Prawn and lobster with chipotle mayo",
      "chineseName": "大虾、龙虾配墨西哥辣椒蛋黄酱"
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/2.2Croquettes.jpg",
    "name": {
      "chineseName": "炸团子",
      "name": "CROQUETTES"
    },
    "price": 8,
  },
  {
    "_id": "v1_mock_menuItem_005",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "汉堡",
      "name": "Burgers"
    },
    "categoryNum": 3,
    "menuItemNum": 1,
    "description": {
      "name": "Lettuce, tomato, house made pickles and B&L's secret burger sauce",
      "chineseName": "生菜，西红柿，自制酸黄瓜，秘制汉堡酱"
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/3.1Burger.jpg",
    "name": {
      "chineseName": "经典汉堡",
      "name": "10OZ ORIGINAL BURGER"
    },
    "options": {
      "radio": {
        "content": [
          {
            "chineseName": "肉饼三成熟",
            "name": "medium rare",
          },
          {
            "chineseName": "肉饼五成熟",
            "name": "medium",
            "price": 16,
          },
          {
            "chineseName": "肉饼八成熟",
            "name": "medium well",
            "price": 16,
          },
          {
            "chineseName": "肉饼全熟",
            "name": "well done",
            "price": 16,
          },
        ],
        "title": {
          "chineseName": "肉饼熟度",
          "name": "How do I like burger cooked"
        }
      },
      "price": 16,
    }
  },
  {
    "_id": "v1_mock_menuItem_006",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "汉堡",
      "name": "Burgers"
    },
    "categoryNum": 3,
    "menuItemNum": 2,
    "description": {
      "name": "10oz Original Burger wrapped in iceberg lettuce, no bun",
      "chineseName": "生菜包10oz原味汉堡（无面包胚）"
    },
    "extraInfo": "",
    "image": "",
    "name": {
      "chineseName": "加利福尼亚汉堡",
      "name": "CALIFORNIA BURGER"
    },
    "price": 16,
  },
  {
    "_id": "v1_mock_menuItem_007",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "汉堡",
      "name": "Burgers"
    },
    "categoryNum": 3,
    "menuItemNum": 3,
    "description": {
      "name": "5oz burger topped with lobster meat, brie, truffle & tarragon mayo, fennel and Chinese cabbage",
      "chineseName": "5oz汉堡胚龙虾肉，布里奶酪，松露龙蒿蛋黄酱，茴香，白菜"
    },
    "extraInfo": "",
    "image": "",
    "name": {
      "chineseName": "龙虾汉堡",
      "name": "LOBSTER BURGER"
    },
    "price": 23,
  },

  {
    "_id": "v1_mock_menuItem_008",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "龙虾",
      "name": "Lobsters"
    },
    "categoryNum": 4,
    "menuItemNum": 1,
    "description": {
      "name": "Steamed or grilled with a choice of clarified butter or B&L's famous lemon & garlic butter",
      "chineseName": "磅半龙虾配秘制柠檬大蒜黄油酱"
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/4.1Lobster.JPG",
    "name": {
      "chineseName": "原味龙虾",
      "name": "THE ORIGINAL LOBSTER"
    },
    "options": {
      "radio": {
        "content": [
          {
            "chineseName": "蒸",
            "name": "steamed",
            "price": 31,
          },
          {
            "chineseName": "明火烤",
            "name": "grilled",
            "price": 31,
          },
        ],
        "title": {
          "chineseName": "蒸还是明火烤",
          "name": "Steamed or grilled?"
        }
      }
    },
    "price": 31,
  },

  {
    "_id": "v1_mock_menuItem_009",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "龙虾",
      "name": "Lobsters"
    },
    "categoryNum": 4,
    "menuItemNum": 2,
    "description": {
      "name": "Lobster with Japanese mayo & lemon",
      "chineseName": "磅半龙虾配龙虾配日本蛋黄酱和柠檬秘制柠檬大蒜黄油酱"
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/4.2Lobster.jpg",
    "name": {
      "chineseName": "原味龙虾卷",
      "name": "ORIGINAL ROLL"
    },
    "price": 25,
  },

  {
    "_id": "v1_mock_menuItem_010",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "甜品",
      "name": "Desserts"
    },
    "categoryNum": 5,
    "menuItemNum": 1,
    "description": {
      "name": "Home baked classic vanilla cheesecake with blueberry compote on biscuit base",
      "chineseName": "自制经典香草奶酪蛋糕、糖渍蓝莓配饼干坯"
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/5.1Cheesecake.jpg",
    "name": {
      "chineseName": "经典纽约奶酪蛋糕",
      "name": "CLASSIC NEW YORK CHEESECAKE "
    },
    "price": 5,
  },
  {
    "_id": "v1_mock_menuItem_011",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "category": {
      "chineseName": "甜品",
      "name": "Desserts"
    },
    "categoryNum": 5,
    "menuItemNum": 2,
    "description": {
      "name": "Served with vanilla ice cream and chocolate sauce",
      "chineseName": "巧克力布朗尼配香草冰淇淋和巧克力酱"
    },
    "extraInfo": "",
    "image": "http://caieatong.oss-eu-central-1.aliyuncs.com/static/v1/5.2Brownie.jpg",
    "name": {
      "chineseName": "巧克力布朗尼",
      "name": "CHOCOLATE BROWNIE"
    },
    "price": 5,
  },
])
module.exports = arr


