const bcrypt = require('bcryptjs');
const dbconnection = require('../dbConnection');

const addUser = (username, password, cb) => {
    bcrypt.genSalt(5, (err, salt) => {
        if (err) res.status(500).send('<h1>500 Server Error</h1>');
        bcrypt.hash(password, salt, (err, hashed) => {
            if (err) res.status(500).send('<h1>500 Server Error</h1>');
            const sql = 'INSERT INTO users (username,password) VALUES ($1,$2)';
            const values = [username, hashed];
            dbconnection.query(sql, values, (err, result) => {
                if (err) cb(err);
                cb(null, 'Successfully added');
            })
        })
    })
}

const addImge = (imgUrl, cb )=> {
    const sql = 'INSERT INTO images (link) VALUES ($1)';
    const values = [imgUrl];
    dbconnection.query(sql, values, (error, doneOrNot) => {
        if (error) {
            cb(error)
        } else {
            cb(null, 'Image added successfully') }
    })
}


module.exports = { addUser, addImge };