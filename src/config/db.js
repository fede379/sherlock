const config = require('./config')
const mongoose = require('mongoose')

mongoose.connect(config.pathDatabase, { useNewUrlParser: true })
    .then(db => console.log('Connected mongodb'))
    .catch(err => console.log('Error al conectar', err))

module.exports = mongoose