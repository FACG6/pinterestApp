const { checkIfUserExist } = require('../database/queries/cheakUser');
const express = require('express');
const addUser = require('../database/queries/addData')
const router = express.Router();

const handler = (req, res) => {
    if (req.cookies.auth) {
        res.redirect('/profile');
    } else {
        res.render('signup', { layout: 'loginAndSignup', title: 'SignUp' });
    }
};

const confirmedHandler = (req, res) => {
    if (req.cookies.auth) {
        res.redirect('/');
    } else {
        const allData = req.body;
        checkIfUserExist(allData.userName, allData.password, (err, result) => {
            if (err) {
                res.status(500).send('<h1>500 Server Error</h1>');
            } else {
                addUser(allData.userName, allData.password, (error, result) => {
                    if(error) res.send('Try again please');
                    res.render('signup', { layout: 'loginSignupMain', title: 'SignUp' })
                })
            }
        })
    }
}
module.exports = { handler, confirmedHandler }