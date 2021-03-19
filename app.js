const express = require('express');
const { projects } = require('./data.json');
const path = require('path');
const app = express();

// initiate pug template for express
app.set('view engine', 'pug');
