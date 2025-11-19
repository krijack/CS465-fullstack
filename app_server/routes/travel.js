const express = require('express');
const router = express.Router();

// connect to the controller
const travelController = require('../controllers/travel');

// GET /travel  →  show the travel page
router.get('/', travelController.travelList);

module.exports = router;
