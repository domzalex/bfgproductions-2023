const mongoose = require('mongoose')

const weekliesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Weeklies', weekliesSchema)