module.exports = {
  currentUrl: function (req, res, next) {
    console.log(req.url)
    next()
  }
}