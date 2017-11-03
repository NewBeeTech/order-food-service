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

  it('order/save & order/list', function(done) {
    async.waterfall([
    (next) => {
      var p = {
        url: `http://localhost:${config.port}/api/order/save`,
        method: 'POST',
        json: true,
        body: {
          restaurantId: 'restaurant_001',
          orderDetail: '好复杂一个串',
        },
      }
      request(p, next)
    },
    (res, body, next) => {
      assert.equal(res.statusCode, 200)
      assert.equal(body.code, 0)
      assert(body.data._id)

      var p = {
        url: `http://localhost:${config.port}/api/order/getDetail?_id=${body.data._id}`,
        method: 'GET',
        json: true,
      }
      request(p, next)
    },
    (res, body, next) => {
      assert.equal(res.statusCode, 200)
      assert.equal(body.code, 0)
      assert(body.data._id)
      assert(body.data.orderDetail)
      assert(body.data.restaurantName)
      assert(body.data.city)
      assert(body.data.country)
      done()
    },
    ], (err) => {
      throw err
    })
  })

  it('user/getOrderList', function(done) {
    var p = {
      url: `http://localhost:${config.port}/api/user/getOrderList`,
      method: 'POST',
      json: true,
      // TODO: openid应该是以header的形式传递过来的
      body: {
        openid: 'test_user',
      }
    }
    request(p, function(err, res, body) {
      assert(!err)
      assert.equal(res.statusCode, 200)
      body.data.forEach(function(o) {
        assert(o._id)
        assert(o.orderDetail)
        assert(o.restaurantName)
        assert(o.city)
        assert(o.country)
      })
      done()
    }, (err) => {
      throw err
    })
  })

  after(function() {
    process.exit(0)
  })
})
