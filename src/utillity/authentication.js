const jwt = require('jsonwebtoken');
require('env2')('config.env');

const createCookie = (idUser, cb) => {
    jwt.sign(idUser, process.env.SECRET, cb
  );
};

module.exports = { createCookie };