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
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);

  if (project) {
    res.render('project', { project });
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
