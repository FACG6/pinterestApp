const express = require('express');
const router = express.Router();
const login = require('./login');
const signup = require('./signup');
const home = require('./home');
const profile = require('./profile')

router.get('/', home.handler);
router.get('/sign-up', signup.handler);
router.post('/sign-up', signup.confirmedHandler);
router.get('/profile', profile.handler);

module.exports = router;
const login = require('./login');
const signup = require('./signup');
const home = require('./home');
const router = express.Router()

router.get('/login', login.get);
router.post('/login', login.post);

module.exports = router
