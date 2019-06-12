const mongoose = require('mongoose')
const Schema = mongoose.Schema

var HistorySchema = Schema({
    input: { type: String, lowercase: true},
    output: { type: String, lowercase: true},
    isValid: Boolean
}, { timestamps: true })

module.exports = mongoose.model('History', HistorySchema)