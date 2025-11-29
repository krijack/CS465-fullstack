const mongoose = require('mongoose');
require('../models/db');

const Trip = mongoose.model('trips');

/* GET travel view */
const travel = async (req, res) => {
    const trips = await Trip.find({});
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel  // This must match what the route is calling
};