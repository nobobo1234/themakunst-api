const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    year: {
        type: Number,
        min: 1,
        max: 3,
        required: [true, 'An exercise must have a year.']
    },
    period: {
        type: Number,
        min: 1,
        max: 4,
        required: [true, 'An exercise must have a period.']
    },
    name: {
        type: String,
        required: [true, 'An exercise must have a name.']
    },
    htmlPath: {
        type: String,
        required: [true, 'An exercise must have HTML data']
    }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
