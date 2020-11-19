const express = require('express')
const Home = express.Router()

Home.use(express.static('public'));

const HomeCtrl = require('./Home.ctrl')

Home.get('/', HomeCtrl.Home)

module.exports = Home