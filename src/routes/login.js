const bcrypt = require('bcryptjs');
const { createCookie } = require('../utillity/authentication')
const checkUser = require('../database/queries/cheakUser')

exports.get = (request, response) => {
    if (request.cookies.auth) {
        response.redirect('/')
    }
    res.render('login', { js: './public/js/domLogin.js', css: './public/css/login.css' });
};

exports.post = (request, response) => {
    const { userName, password } = request.body;
    checkUser(userName, password, (err, res) => {
        if (err) {
            response.redirect('/login');
        } else {
            createCookie(res.id, (err, token) => {
                if (err) {
                    response.redirect('/login');
                }
                else {
                    response.setHeader('set-Cookie', `jwt=${token}; max-age=972592207599`);
                    response.redirect('/');
                }
            });
        }
    });
};    