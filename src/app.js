const express = require('express');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const compression = require('compression');
const routes = require('./routes/index');
const { verify } = require('jsonwebtoken');

const app = express();
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  if (!req.cookies.data) {
     request.cookies.auth = false;
     next();
  }else{
    verify(data, process.env.SECRET, (err, decoded) => {
      if (err) {
        request.cookies.auth=err;
        next();
      }else{
        request.cookies.auth=decoded;
        next();
      }
    });
  }
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);

app.set('port', process.env.PORT || 3000);
app.use(routes);

module.exports = app;
