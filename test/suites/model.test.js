const requireGlob = require('require-glob')
const mock = requireGlob.sync(['../mock/*.js'])
const async = require('async')

describe('model', function() {
  it('prepare data', function(done) {
    
    const model = require('../../model')
    async.waterfall([
    // delete old data
    (next) => {
      async.eachSeries(Object.keys(model), function(name, nextModel) {
        model[name].remove({operator: 'UT-TESTER'}, nextModel)
      }, next)
    },
      // add city
    (next) => {
      model.City.insertMany(mock.city, next)
    },
    // add restaurant
    (res, next) => {
      model.Restaurant.insertMany(mock.restaurant, next)
    },
    // add menu
    (res, next) => {
      model.Menu.insertMany(mock.menu, next)
    },
    // add menu_item
    (res, next) => {
      model.MenuItem.insertMany(mock.menu_item, next)
    },
    // add set menu
    (res, next) => {
       model.SetMenu.insertMany(mock.set_menu, next)
    },
    // add order
    (res, next) => {
      model.Order.insertMany(mock.order, next)
    },
    (res, next) => {
      done()
    },
    ], (err) => {
       throw err
    })

  })
})
