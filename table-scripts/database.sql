DROP TABLE if exists words;
DROP TABLE if exists sentences;

CREATE TABLE words (
    nouns text[] NOT NULL,
    adjectives text[] NOT NULL,
    adverbs text[] NOT NULL,
    verbs text[] NOT NULL,
    pronouns text[] NOT NULL,
    exclamations text[] NOT NULL,
    prepositions text[] NOT NULL,
    conjunctions text[] NOT NULL,
    determiners text[] NOT NULL
);

CREATE TABLE sentences (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    sentence TEXT NOT NULL
);