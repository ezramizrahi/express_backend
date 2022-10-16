const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});

module.exports = Film = mongoose.model('film', FilmSchema);