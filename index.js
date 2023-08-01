const express = require('express');
const cors = require('cors');
const apicache = require('apicache');

const app = express();
const port = process.env.PORT || 4000;
const cache = apicache.middleware;

app.use(cors());
app.use(express.json());

const sentencesRouter = require('./routes/sentencesRouter');
const wordsRouter = require('./routes/wordsRouter');

app.use('/sentences', sentencesRouter);
app.use('/words', cache("2 minutes"), wordsRouter);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
