var {saludar} = require("./models");

function saludo(req, res) {
  var nombre = req.query.name;
  res.render('index', {data: {message: "Hola " + saludar(nombre)}});
}

function despedida(req, res) {
  var nombre = req.query.name;
  res.render('index', {data: {message: "Chau " + saludar(nombre)}});
}

module.exports = {
  saludo,
  despedida,
};
