var citys = [
{
  "_id": "city_001",
  "operateTime": new Date(),
  "operator": "UT-TESTER",
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
  },
}
]

citys.push({
  "_id": "v1_mock_city_01",
  "operateTime": new Date(),
  "operator": "MOCKER",
  "city": [
    {
      "chineseName": "伦敦",
      "name": "London",
    }
  ],
  "country": {
    "chineseName": "英国",
    "currencyType": "£",
    "name": "England",
  },
})

module.exports = citys
