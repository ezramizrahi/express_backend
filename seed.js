const mongoose = require('mongoose');
const Film = require('./models/Film');
require('dotenv').config();
const connectionString = process.env.ATLAS_URI;

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
        id: '111',
        title: 'seed title',
        director: 'seed director',
        description: 'seed desc',
        year: 'seed year'
    }
];

const seedDB = async () => {
    // await Film.deleteMany({});
    await Film.insertMany(seedData);
};

seedDB().then(() => {
    console.log('seeded!');
    mongoose.connection.close();
});