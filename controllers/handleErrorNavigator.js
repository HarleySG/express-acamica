var { error } = require("../models");

function handle404 (req, res) {
  const e404 = error[404]()
  res.render('404', e404)
}

module.exports = {
  handle404
};
