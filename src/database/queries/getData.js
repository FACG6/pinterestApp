
const connection = require('../dbConnection');

const getData = (cb) => {
  connection.query('SELECT * from images', cb);
};

module.exports = getData;
