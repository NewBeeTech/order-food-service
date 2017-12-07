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

  after(function() {
    process.exit(0)
  })
})
