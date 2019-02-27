const bcrypt = require('bcryptjs');
const dbconnection = require('../dbConnection');

const addUser = (username, password, cb) => {
    bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(password, salt, (err, hashed) => {
            const sql = 'INSERT INTO users (username,password) VALUES ($1,$2)';
            const values = [username, hashed];
            dbconnection.query(sql, values, (err, result) => {
                if (err) cb(err);
                cb(null, 'Successfully added');
            })
        })
    })
}
module.exports = addUser;