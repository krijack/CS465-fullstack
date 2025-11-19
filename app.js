const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// ----- VIEW ENGINE SETUP -----
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// ----- STATIC FILES -----
app.use(express.static(path.join(__dirname, 'public')));

// ----- ROUTES -----
const travelRouter = require('./app_server/routes/travel');
app.use('/travel', travelRouter);

module.exports = app;
