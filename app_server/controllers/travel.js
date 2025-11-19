// Controller for the Travel page

const travelList = function (req, res) {
    res.render('travel', {
        title: 'Travel',
        trips: [
            {
                name: '2023 Best Beaches Contest Winners',
                summary: 'Explore the top beaches chosen for the 2023 summer season.',
                image: 'kayak.jpg'
            },
            {
                name: 'Top 10 Diving Spots',
                summary: 'Discover the most breathtaking diving experiences.',
                image: 'reef1.jpg'
            },
            {
                name: 'Luxury Rooms',
                summary: 'Relax in one of our deluxe oceanfront rooms.',
                image: 'suite.jpg'
            }
        ]
    });
};

module.exports = {
    travelList
};
