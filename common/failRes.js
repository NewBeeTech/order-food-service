module.exports = function(res, message) {
  var result = {
    code: -1,
    message: message
  }
  res
    .status(200)
    .send(result)
}
