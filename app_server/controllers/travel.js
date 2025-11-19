var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));

const travelList = function(req, res) {
    res.render('travel', {
        title: 'Travel',
        trips
    });
};

module.exports = {
    travelList
};
