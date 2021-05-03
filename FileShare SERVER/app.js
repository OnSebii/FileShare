const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const expressFileupload = require('express-fileupload');
const cors = require('cors');
let session = require('express-session');

require('dotenv').config();

require('colors');

// Time interval delete files after a week
// const time = 1000 * 3600 * 24 * 7;
// setInterval(function () {
//   console.log('1');
// }, time);

const app = express();
const routes = require('./routes');
const { errorHandler } = require('./middleware');

app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('dev'));
app.use(helmet());
app.use(expressFileupload());
app.use(cors());

app.use(express.json());

let { PORT, NODE_ENV, SESSION_LIFETIME, SESSION_NAME, SESSION_SECRET } = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: SESSION_LIFETIME * 1000 * 60 * 60,
      httpOnly: false,
      sameSite: true,
      secure: NODE_ENV === 'production',
    },
  }),
);

app.use('/', routes);

app.use(errorHandler);

app.listen(PORT ?? 5000);
