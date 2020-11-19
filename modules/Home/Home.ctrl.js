module.exports = {
  Home: function (req, res) {
    res.locals.data = { title: "Index", message: "Usando Pugjs con express" }
    res.render('index')
  }
}