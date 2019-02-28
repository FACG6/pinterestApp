const {getData} = require('../database/queries/getData')

exports.get = (req, response) => {
	if (req.cookies.jwt)
		getData((err, res) => {
			response.render('profileHeader', { js: './js/domHome.js', css: './css/style.css',ruesult:res });
		})
	else
	getData((err, res) => {
		response.render('homeHeader', { js: './js/domHome.js', css: './css/style.css', ruesult:res });
	})
};