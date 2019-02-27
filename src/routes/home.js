const express = require('express');
const app = express();
const router = express.Router();

const handler = (req, res) => {
	 res.render('home', {js: './js/domHome.js', css: './css/style.css'})
}

module.exports = { handler } ; 


