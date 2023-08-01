const client = require('../db');
const router = require('express').Router();

router.route('/').get(async (req, res) => {
    try {
        const sentences = await client.query('SELECT * FROM sentences');

        res.json(sentences.rows);
    } catch (error) {
        console.error(error);
    }
});

router.route('/submit').post(async (req, res) => {
    try {
        const { sentence } = req.body;
        const newSentence = await client.query('INSERT INTO sentences (sentence) VALUES ($1) RETURNING *', [sentence]);

        res.json(newSentence.rows[0]);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;