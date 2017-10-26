module.exports = function(res, data, message) {
  var result = {
    code: 0,
    data: data,
    message: message || ''
  }

  res
    .status(200)
    .send(result)
}
