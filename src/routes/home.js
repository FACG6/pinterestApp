const express = require('express');

const handler = (req, res) => {
	 res.render('home', {js: './js/domHome.js', css: './css/style.css'})
}

 

exports.get = (req, res) => {
	if(req.cookies.auth)
	res.render('profileHeader', {js: './js/domHome.js', css: './css/style.css'});
	else
	res.render('homeHeader', {js: './js/domHome.js', css: './css/style.css'});
};


module.exports = { handler } ;