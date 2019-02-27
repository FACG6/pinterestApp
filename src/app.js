const express = require('express');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const { verify } = require('jsonwebtoken');
const compression = require('compression');
const { signup, home, login, profile } = require('./routes/index');
const routes = require('./routes');
const helpers = require("./views/helpers/index");

const app = express();
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  if (!req.cookies.auth) {
    req.cookies.auth = false;
    next();
  } else {
    verify(req.cookies.auth, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.clearCookie('');
        next();
      } else {
        req.cookies.auth = decoded;
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
    helpers
  }),
);

app.set('port', process.env.PORT || 3000);
app.use(routes);

app.disable('x-powered-by');
module.exports = app;
