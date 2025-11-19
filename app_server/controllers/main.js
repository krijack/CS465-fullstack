// main.js – controller for the home page

const index = function(req, res) {
    res.render('index', { title: 'Travlr Getaways' });
};

module.exports = {
    index
};
