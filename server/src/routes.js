const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/signup', UserController.store);
routes.post('/login', UserController.login);

module.exports = routes;