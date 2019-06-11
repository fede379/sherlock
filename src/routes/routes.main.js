const routes = require('express').Router()
const mainController = require('../controllers/mainController')

routes.get('/', mainController.viewIndex)

module.exports = routes