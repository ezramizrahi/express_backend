const express = require('express');
const router = express.Router();

// Load Film model
const Film = require('../../models/Film');

// @route GET api/films/test
// @description tests films route
// @access Public
router.get('/test', (req, res) => res.send('film route testing!'));

// @route GET api/films
// @description get all films
// @access Public
router.get('/', (req, res) => {
  Film.find()
    .then(films => res.json(films))
    .catch(err => console.log(err));
});

// @route GET api/films/:id
// @description get single film by id
// @access Public
router.get('/:id', (req, res) => {
  Film.findById(req.params.id)
    .then(film => res.json(film))
    .catch(err => console.log(err));
});

// @route POST api/films
// @description add/save film
// @access Public
router.post('/', (req, res) => {
  Film.create(req.body)
    .then(film => res.json({ msg: 'Film added successfully' }))
    .catch(err => console.log(err));
});

// @route PUT api/films/:id
// @description update film
// @access Public
router.put('/:id', (req, res) => {
  Film.findByIdAndUpdate(req.params.id, req.body)
    .then(film => res.json({ msg: 'Updated successfully' }))
    .catch(err => console.log(err));
});

// @route DELETE api/films/:id
// @description delete film by id
// @access Public
router.delete('/:id', (req, res) => {
  Film.findByIdAndRemove(req.params.id, req.body)
    .then(film => res.json({ mgs: 'Film deleted successfully' }))
    .catch(err => console.log(err));
});

module.exports = router;