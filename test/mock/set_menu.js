var setMenu = [
{
  "_id": "setMenu_001",
  "operateTime": new Date(),
  "operator": "UT-TESTER",
  "setMenuDetail": ["menuItem_000", "menuItem_001", "menuItem_004"],
  "desc": "套餐一含2个头菜1个主菜",
  "name": {
    chineseName: "套餐一",
    name: 'Combo1'
  },
  "price": 86,
},
{
  "_id": "setMenu_002",
  "operateTime": new Date(),
  "operator": "UT-TESTER",
  "setMenuDetail": ["menuItem_002", "menuItem_003"],
  "desc": "套餐二含1个头菜1个主菜",
  "name": {
    chineseName: "套餐二",
    name: 'Combo2'
  },
  "price": 45,
},
]

setMenu = setMenu.concat([
  {
    "_id": "v1_mock_setMenu_001",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "setMenuDetail": [
      "v1_mock_menuItem_003",
      "v1_mock_menuItem_004",
      "v1_mock_menuItem_008",
      "v1_mock_menuItem_009",
      "v1_mock_menuItem_010",
      "v1_mock_menuItem_011"
    ],
    "desc": "",
    "name": {
      chineseName: "龙虾套餐",
      name: 'Lobster Set Menu'
    },
    "price": 50,
  },
  {
    "_id": "v1_mock_setMenu_002",
    "operateTime": new Date(),
    "operator": "MOCKER",
    "setMenuDetail": [
      "v1_mock_menuItem_003",
      "v1_mock_menuItem_004",
      "v1_mock_menuItem_005",
      "v1_mock_menuItem_006",
      "v1_mock_menuItem_010",
      "v1_mock_menuItem_011"
    ],
    "desc": "",
    "name": {
      chineseName: "汉堡套餐",
      name: 'Burger Set Menu'
    },
    "price": 50,
  },
])
module.exports = setMenu
