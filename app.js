const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');

// initiated an external route file
var router = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// linking folder for static assets
app.use('/static', express.static('public'));

// routes to index.js file in router folder
app.use('/', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  console.log(`Sorry, you've encountered a ${err.status} Error`);

  err.status === 404
    ? res.status(404).render('page-not-found', { err })
    : res.status(err.status || 500).render('error', { err });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port 3000!');
});
