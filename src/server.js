const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    favicon = require('serve-favicon'),
    config = require('./config/config'),
    app = express()

// db, port, view engine and views path configuration
app.set(require('./config/db'))
app.set('port', process.env.PORT || config.port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(favicon(path.join(__dirname, '/../public', 'img', 'favicon.ico')))
app.use('/', express.static(__dirname + './../public'))
app.use('/bootstrap', express.static(__dirname + './../node_modules/bootstrap/dist/css'))
app.use('/bootstrap/js', express.static(__dirname + './../node_modules/bootstrap/dist/js'))
app.use('/jquery', express.static(__dirname + './../node_modules/jquery/dist'))
app.use(logger('dev')) // morgan logger
app.use(bodyParser.urlencoded({ extended: false }))
app.options('*', cors())

// routers
app.use('/', require('./routes/routes.main'))

app.listen(app.get('port'), () => { console.log('Listening to port: ' + app.get('port')) })