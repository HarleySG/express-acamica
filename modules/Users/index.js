const express = require('express')
const User = express.Router()
const userCtrl = require('./users.ctrl')

User.use(express.static('public'));

// User.param('id', function(req, res, next, id) {
//   if(id === '1') {
//     res.locals.data = {id, title: "User", message: "User route"}
//     next()
//   } else {
//     const e404 = error[404]()
//     res.render('404', e404)
//   }
// })

User.get('/', userCtrl.user)
User.get('/:id', userCtrl.userDetail)
User.get('/:id/edit', userCtrl.userEdit)

module.exports = User