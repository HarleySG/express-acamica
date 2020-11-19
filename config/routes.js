const Home = require('../modules/Home')
const Salutations = require('../modules/Salutations')
const User = require('../modules/Users')

module.exports = function (app) {
  app.use('/', Home)
  app.use("/user", User);
  app.use("/say", Salutations);
};
