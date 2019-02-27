
const connection = require('../dbConnection');

const getData = (cb) => {
  connection.query('SELECT url from images', cb);
};

module.exports = getData;
