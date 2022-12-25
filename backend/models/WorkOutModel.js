const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkOutModel = new Schema({
    title: {
        type: String,
        required: true
    },
    qua: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Workouts', WorkOutModel)