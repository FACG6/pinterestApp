const bcrypt = require('bcryptjs');
const dbconnection = require('../dbConnection');

const addUser = (username, hashed, cb) => {
    const sql = 'INSERT INTO users (username,name,password) VALUES ($1,$3,$2) returing *';
    const values = [username,username, hashed];
    dbconnection.query(sql, values, (err, result) => {
        console.log(result);
        cb(err, result);
    })
}

const addImge = (imgUrl, cb) => {
    const sql = 'INSERT INTO images (link) VALUES ($1)';
    const values = [imgUrl];
    dbconnection.query(sql, values, (error, doneOrNot) => {
        if (error) {
            cb(error)
        } else {
            cb(null, 'Image added successfully')
        }
    })
}


module.exports = { addUser, addImge };