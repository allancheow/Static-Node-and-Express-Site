const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
  // res.send('Home page');
  res.render('index', { projects });
});

router.get('/about', (req, res) => {
  res.render('about', { projects });
});

router.get('/project/:id', (req, res) => {
  res.send(`Project page for ID #${req.params.id}`);
});

module.exports = router;
