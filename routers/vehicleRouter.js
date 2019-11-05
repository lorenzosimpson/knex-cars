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












module.exports = router;