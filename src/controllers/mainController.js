const _History = require('../models/history')
const moment = require('moment')
const utils = require('../utils/utils')

exports.viewIndex = async (req, res) => {
    let history = await _History.find()
    res.render('index', { history, moment })
}

exports.addString = (req, res) => {
    let { string } = req.body
    if (string.trim().length !== 0) {
        let hist = new _History(utils.sherlock(string))
        hist.save(function (err, h) {
            if (err) console.log(err)
        })
    }
    res.redirect('/')
}

exports.deleteString = async (req, res) => {
    let { id } = req.params
    await _History.deleteOne({_id: id})
    res.redirect('/')
}