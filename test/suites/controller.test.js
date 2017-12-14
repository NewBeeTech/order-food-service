require('./model.test.js')
const request = require('request')
const assert = require('assert')
const config = require('../../config')
const async = require('async')

describe('controller', function() {

  it('city/list', function(done) {
    var p = {
      url: `http://localhost:${config.port}/api/city/list`,
      method: 'GET',
      json: true,
    }
    request(p, function(err, res, body) {
      assert(!err)
      assert.equal(res.statusCode, 200)
      assert.equal(body.data[0].city[0].name, 'New York')
      done()
    }, (err) => {
      throw err
    })
  })

  it('restaurant/getDetail', function(done) {
    var p = {
      url: `http://localhost:${config.port}/api/restaurant/getDetail?_id=v1_mock_restaurant_01`,
      method: 'GET',
      json: true,
    }
    request(p, function(err, res, body) {
      assert(!err)
      assert.equal(res.statusCode, 200)
      var item = body.data.aLaCarte['早餐'][0].options.radio.content[0]
      assert(item.price === 3)
      assert(item.default === item.checked === true)
      done()
    }, (err) => {
      throw err
    })
  })

  after(function() {
    process.exit(0)
  })
})
