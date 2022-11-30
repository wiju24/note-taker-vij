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