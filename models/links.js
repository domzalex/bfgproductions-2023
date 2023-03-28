const mongoose = require('mongoose')

const linksSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Links', linksSchema)
