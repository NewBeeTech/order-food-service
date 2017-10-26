var requireGlob = require('require-glob')
module.exports = requireGlob.sync(['*.js', '!index.js'])
