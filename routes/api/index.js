const router = require('express').Router();
const articleRoutes = require('./article');

router.use('/', articleRoutes);

module.exports =router;