const express = require('express');
const router = express.Router();

// connect to the controller
const mainController = require('../controllers/main');

// GET home page
router.get('/', mainController.index);

module.exports = router;
