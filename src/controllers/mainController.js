const _History = require('../models/history')
const moment = require('moment')

exports.viewIndex = async (req, res) => {
    let history = await _History.find()
    res.render('index', { history, moment })
}

exports.addString = (req, res) => {
    let { string } = req.body
    if (string.trim().length !== 0) {
        let hist = new _History({
            input: string,
            output: string,
            isValid: false
        })
        hist.save(function (err, h) {
            if (err) {console.log(err); res.send({ error: err})}
        })
    }
    res.redirect('/')
}

exports.deleteString = async (req, res) => {
    let { id } = req.params
    await _History.deleteOne({_id: id})
    res.redirect('/')
}