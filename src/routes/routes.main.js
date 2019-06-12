const routes = require('express').Router()
const mainController = require('../controllers/mainController')

routes.get('/', mainController.viewIndex)
routes.post('/add', mainController.addString)
routes.get('/delete/:id', mainController.deleteString)

module.exports = routes