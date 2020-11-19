function user (req, res) {
  res.locals = {
    title: "User",
    data : {
      message: "User Home"
    }
  }
  res.status(200).render('index')
}
function userEdit (req, res) {
  res.locals = {
    title: "User",
    data : {
      message: "User Edit"
    }
  }
  res.render('users')
}
function userDetail (req, res) {
  res.locals = {
    title: "User",
    data : {
      message: "User Details"
    }
  }
  res.render('users')
}

module.exports = {
  user,
  userDetail,
  userEdit,
};
