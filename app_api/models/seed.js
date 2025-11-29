#!/usr/bin/env node

const mongoose = require('./db');
const fs = require('fs');
const path = require('path');

// Load models
require('./travlr');

// Load the JSON data using absolute path
const tripsPath = path.join(__dirname, '..', '..', 'data', 'trips.json');
console.log('Looking for trips.json at:', tripsPath);
let trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

// Get references to the models
const Trip = mongoose.model('trips');

// First, remove any existing trips
Trip.deleteMany({})
    .then(() => {
        console.log('Existing trips removed');
        
        // Insert all trips from the JSON file
        return Trip.insertMany(trips);
    })
    .then((docs) => {
        console.log(`Inserted ${docs.length} trips`);
        mongoose.connection.close();
        console.log('Mongoose disconnected');
    })
    .catch(err => {
        console.error('Error seeding database:', err);
        mongoose.connection.close();
    });