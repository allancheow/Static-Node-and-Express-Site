const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// route to home page passing project database
router.get('/', (req, res) => {
  res.render('index', { projects });
});

// route to about page
router.get('/about', (req, res) => {
  // Uncomment below to test non 404 error
  // throw createError(500);
  res.render('about', { projects });
});

// route to each individual project page
router.get('/project/:id', (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);

  // utilizing ternary operator to determine if project exist in the database
  project
    ? res.render('project', { project })
    : ((err = new Error()), (err.status = 404), next(err));
});

module.exports = router;
