const express = require('express');
const recipesRouter = require('./recipes/recipes-router')
const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.use('*', (req,res)=>{//eslint-disable-line
    res.json({message:"API is running"})
})

module.exports = server;