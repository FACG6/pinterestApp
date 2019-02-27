const express = require('express');


exports.get = (req, res) => {
	if(req.cookies.auth)
	res.render('profileHeader', {js: './js/domHome.js', css: './css/style.css'});
	else
	res.render('homeHeader', {js: './js/domHome.js', css: './css/style.css'});
};


