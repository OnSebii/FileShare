const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
require('colors');
const userRoutes = require('./routes/userRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
require('dotenv').config();

// Time interval delete files after a week
// const time = 1000 * 3600 * 24 * 7;
// setInterval(function () {
//   console.log('1');
// }, time);

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/', userRoutes);
app.use(notFoundHandler);

app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
