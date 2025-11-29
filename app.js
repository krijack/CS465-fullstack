// app.js

const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// ------------------- VIEW ENGINE SETUP -------------------
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register Handlebars partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

hbs.registerHelper('ifEquals', function(a, b, options) {
  return (a === b) ? options.fn(this) : options.inverse(this);
});

// ------------------- STATIC FILES -------------------
app.use(express.static(path.join(__dirname, 'public')));


// ------------------- ROUTES -------------------
const indexRouter = require('./app_server/routes/index');     // home page route
const travelRouter = require('./app_server/routes/travel');   // travel route

app.use('/', indexRouter);
app.use('/travel', travelRouter);


// ------------------- API ROUTES -------------------
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);


// ------------------- EXPORT APP -------------------
module.exports = app;