const connection = require('../dbConnection');

const checkUser = (userName, password, cb) => {
    const sql = 'SELECT userName, password from users where userName = ($1) AND password = ($2)'
    const values = [userName, password];
    connection.query(sql, values, (err, result) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res.rows);
        }
    }))


    module.exports = checkUser;