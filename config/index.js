const express = require("express");

const app = express();
const routes = require("./routes");
const { error } = require("../models");
const { currentUrl } = require('../middleware')

app.set('views', `./views`);
app.set("view engine", "pug");

app.use(express.static('/public'));
app.use(express.static('/public/css'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Middleware
app.use([currentUrl])

routes(app);

app.use(function (req, res, next) {
  const e404 = error[404]()
  res.status(404).render('404', e404)
})


module.exports = {
  app,
  routes,
};
