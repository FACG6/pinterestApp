//const checkIfUserNameIsUsed = require('../database/queries/checkIfUserNameIsUsed');//Query
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.cookies.auth) {
        res.redirect('/');
    } else {
        res.render('signup', { layout: 'loginAndSignup', title: 'SignUp'});
    }
});

router.post('/', (req, res) => {
    if (req.cookies.auth) {
        res.redirect('/');
    } else {
        const allData = req.body;
        // checkIfUserNameIsUsed(allData.userName,allData.password,(err,result)=>{
        // if (err) {
        //     res.status(500).send(<h1>500 Server Error</h1>);
        // } else {
        //     res.render('signup', { layout: 'loginSignup', title: 'SignUp' })
        // }
        // })

    }

})

module.exports = router;