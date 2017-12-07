var menu = [
{
  "_id": "menu_001",
  "operateTime": new Date(),
  "operator": "UT-TESTER",
  "aLaCarte": ["menuItem_000", "menuItem_001", "menuItem_002", "menuItem_003"],
  "setMenu": ["setMenu_001", "setMenu_002"],
  "desc": "第一种菜单...."
}
]

menu.push({
  "_id": "v1_mock_menu_01",
  "operateTime": new Date(),
  "operator": "MOCKER",
  "aLaCarte": [
    "v1_mock_menuItem_001",
    "v1_mock_menuItem_002",
    "v1_mock_menuItem_003",
    "v1_mock_menuItem_004",
    "v1_mock_menuItem_005",
    "v1_mock_menuItem_006",
    "v1_mock_menuItem_007",
    "v1_mock_menuItem_008",
    "v1_mock_menuItem_009",
    "v1_mock_menuItem_010",
    "v1_mock_menuItem_011",
  ],
  "setMenu": [],
  "desc": "v1 mock menu"
})
module.exports = menu

