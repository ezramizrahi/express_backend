require('dotenv').config();
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Film = require('./models/Film');
const connectionString = process.env.ATLAS_URI;

const createFakeFilm = () => {
    return {
        id: faker.random.alphaNumeric(10),
        title: faker.lorem.words(3),
        director: faker.name.fullName(),
        description: faker.lorem.words(10),
        year: faker.random.numeric(4),
    };
};

const createFakeFilms = (numFilms = 5) => {
    return Array.from({ length: numFilms }, createFakeFilm);
};

const fakeFilmSeedData = createFakeFilms(5);

mongoose.connect(
    connectionString, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        console.log('connection open');
    })
    .catch((err) => {
        console.log(err);
    });

const seedDB = async () => {
    await Film.deleteMany({});
    await Film.insertMany(fakeFilmSeedData);
};

seedDB().then(() => {
    console.log('seeded!');
    mongoose.connection.close();
});