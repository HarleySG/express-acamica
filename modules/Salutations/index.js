const express = require('express')
const Salutations = express.Router()

Salutations.use(express.static('public'));

const { saludo, despedida } = require('./ctrls')

Salutations.get('/', saludo)
Salutations.get('/goodbye', despedida)

module.exports = Salutations