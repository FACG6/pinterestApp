const express = require('express');
const router = express.Router();
const login = require('./login');
const signup = require('./signup');
const home = require('./home');
const profile = require('./profile')

router.get('/login', login.get);
router.post('/login', login.post);
router.get('/', home.handler);
router.get('/sign-up', signup.handler);
router.post('/sign-up', signup.confirmedHandler);
router.get('/profile', profile.handler);

const login = require('./login');
const signup = require('./signup');
const home = require('./home');

module.exports = router
