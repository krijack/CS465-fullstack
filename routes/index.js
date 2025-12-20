var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const { requireAuth, JWT_SECRET } = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * POST /api/login
 */
router.post('/api/login', function(req, res) {
  const { username, password } = req.body;

  // mock credentials per assignment
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign(
      { username: 'admin', role: 'admin' },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

/**
 * GET /api/admin-test
 */
router.get('/api/admin-test', requireAuth, function(req, res) {
  res.json({
    message: 'Authenticated',
    user: req.user
  });
});

module.exports = router;
