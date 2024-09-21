const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.prettyGirlFunction);

module.exports = routes;