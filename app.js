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

app.use('/', router);

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
