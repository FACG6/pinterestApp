const express = require('express');
const login = require('./login');
const signup = require('./signup');
const home = require('./home');
const router = express.Router()

router.get('/login', login.get);
router.post('/login', login.post);

module.exports = router
