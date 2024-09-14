// backend/routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all products
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

module.exports = router;
