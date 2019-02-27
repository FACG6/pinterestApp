const express = require('express');
const router = express.Router();
const login = require('./login');
const signup = require('./signup');
const home = require('./home');
const addImg = require('./addImg');

router.get('/', home.handler);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/sign-up', signup.handler);
router.post('/sign-up', signup.confirmedHandler);
router.post('/addImg', addImg.addImgUrl);

module.exports = router;