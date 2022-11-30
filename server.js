// Standards NPM packages installed before CRUD opperations
const fs = require('fs');
const express = require('express');
const note = express();
const uniqid= require('uniqid');
const path = require('path');
const db = require('./Develop/db/db.json');
const internal = require('stream');

// PORT path number
const PORT = process.env.PORT || 3001;

// Priority CRUD code
note.use(express.static('Develop/public'));
note.use(express.json());
note.use(express.urlencoded({ extended: true }));

// GET operation for getting information from index, notes and api/notes
note.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))
});

note.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
});

note.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/db/db.json'))
});


// POST operation for posting notes
note.post('/api/notes', (req, res) =>{
    // Extracting from the Database
    let dbJson = fs.readFileSync ('./Develop/db/db.json');
    dbJson = JSON.parse(dbJson);

    // The inputed data from the user will be displayed like this
    let tempnoteData = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text,
    };

    dbJson.push(info);
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

// DELETE operation for removing any data with the use of id params from the database and application itself
note.delete('./api/notes/:id', (req, res) => {
    let currentNote = JSON.parse(fs.readFileSync('./Develop/db/db.json'));

    let prevNote = dbJson.filter(item => item.id !== req.params.id);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(prevNote));
    res.json(prevNote);
});

note.listen(PORT, () => {
    console.log(`The server direction is working at http://localhost:${PORT}`);
  })