const client = require('../db');
const router = require('express').Router();

router.route('/').get(async (req, res) => {
    try {
        const words = await client.query('SELECT * FROM words');

        res.json(words.rows);
    } catch (error) {
        console.error(error);
    }
});

router.route('/submit').post(async (req, res) => {
    try {
        const { nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, determiners, exclamations } = req.body;
        const newSentence = await client.query('INSERT INTO words (nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, determiners, exclamations) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, determiners, exclamations]);

        res.json(newSentence.rows[0]);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;