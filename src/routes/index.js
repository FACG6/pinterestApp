const express = require('express');
const router = express.Router();
const login = require('./login');
const signup = require('./signup');
const home = require('./home');

router.get('/', home.handler);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/sign-up', signup.handler);
router.post('/sign-up', signup.confirmedHandler);

module.exports = router;


