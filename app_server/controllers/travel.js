const mongoose = require('mongoose');
require('../../app_api/models/db'); // Updated path

// Get reference to the Trip model
const Trip = mongoose.model('trips');

/* GET travel view */
const travel = async (req, res) => {
    // Use the Trip model to query the database
    const trips = await Trip.find({});
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};