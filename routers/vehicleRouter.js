const express = require('express');
const knex = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    knex
    .select('*')
    .from('vehicles')
    .then(vehicles => res.status(200).json(vehicles))
    .catch(err => res.status(500).json({ error: 'Failed to fetch vehicles' }))
})

router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('vehicles')
    .then(added => res.status(201).json(added))
    .catch(err => res.status(500).json({ error: 'Failed to add vehicle' }))
})


router.put('/:id', (req, res) => {
    knex('vehicles')
    .where({ id: req.params.id })
    .update(req.body)
    .then(updated => updated === 0 ? res.status(404).json({ message: 'id does not exist'}) : res.status(200).json(updated))
    .catch(err => res.status(500).json({ error: 'Failed to update vehicle' }))
})

router.delete('/:id', (req, res) => {
    knex('vehicles')
    .where({ id: req.params.id })
    .del()
    .then(deleted => deleted === 0 ? res.status(404).json({ message: 'id does not exist'}) : res.status(200).json(deleted))
    .catch(err => res.status(500).json({ error: 'Failed to delete vehicle'}))
})








module.exports = router;