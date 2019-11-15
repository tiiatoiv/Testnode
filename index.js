'use strict';

const express = require('express');
const connection = require('/.model/db.js');

const app = express();

app.use(express.static('public'));

app.get("/animal", async (req, res) => {
    try {
    const [results, fields] = await connection.query(
        'SELECT * FROM animal');
            console.log(results);
            console.log(fields);
            res.json(results);
        } catch (e) {
    console.log(e);
    res.send('db error :[');
}
});

app.get('/', (req, res) => {
res.send("hello from my nodser server");
});

app.get("/demo", (req, res) => {
    console.log(req);
    res.send("Demo");
});

app.listen(30001, () => {
    console.log("server app started!");
});