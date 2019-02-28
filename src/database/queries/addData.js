const dbconnection = require('../dbConnection');

const addUser = (username, hashed, cb) => {
    const sql = 'INSERT INTO users (username,name,password) VALUES ($1,$2,$3) returning *';
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
            cb(error, 'Image added successfully')
    });
}


module.exports = { addUser, addImge };