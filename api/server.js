const express = require('express');
const helmet = require('helmet');

const fruitsRouter = require('../fruits/fruits-router.js');
const veggieRouter = require('../veggies/veggieRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/fruits', fruitsRouter);
server.use('/api/veggies', veggieRouter);

module.exports = server;
