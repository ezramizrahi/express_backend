const mongoose = require('mongoose');
const Film = require('./models/Film');
require('dotenv').config();
const connectionString = process.env.ATLAS_URI;
const { faker } = require('@faker-js/faker');

const randomID = faker.random.alphaNumeric(10);
const randomTitle = faker.lorem.words(3);
const randomDirector = faker.name.fullName();
const randomDesc = faker.lorem.words(10);
const randomYear = faker.random.numeric(4);


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

const seedData = [
    {
        id: randomID,
        title: randomTitle,
        director: randomDirector,
        description: randomDesc,
        year: randomYear
    }
];

const seedDB = async () => {
    await Film.deleteMany({});
    await Film.insertMany(seedData);
};

seedDB().then(() => {
    console.log('seeded!');
    mongoose.connection.close();
});