const express = require('express');
const app = express.Router();
const { isLoggedIn } = require('./middleware');
const { Address } = require('../db');

app.get('/', async(req, res, next)=> {
  try {
    res.send(await Address.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.post('/', isLoggedIn, async(req, res, next)=> {
  try {
    const response = await Address.create(req.body)
    res.status(201).send(response);
  }
  catch(ex){
    next(ex);
  }
});

app.put('/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const address = await Address.findByPk(req.params.id);
    res.send(await address.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const address = await Address.findByPk(req.params.id);
    await address.destroy();
    res.sendStatus(204);
  }
  catch(ex){
    next(ex);
  }
});

module.exports = app;