const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const expressFileupload = require('express-fileupload');
const cors = require('cors');
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

app.use('/', routes);
app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;
app.listen(PORT);
