const express = require('express');
const app = express.Router();
const { isLoggedIn } = require('./middleware');
const { Address } = require('../db');
const { response } = require('../server/app');

app.get('/api/account/addresses', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await Address.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.post('/api/addresses', isLoggedIn, async(req, res, next)=> {
  try {
    const response = await Address.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
    })
    res.status(201).send(response);
  }
  catch(ex){
    next(ex);
  }
});

app.put('/api/account/addresses/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const address = await Address.findByPk(req.params.id);
    res.send(await address.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/api/account/addresses/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const address = await Address.findByPk(req.params.id);
    await address.destroy();
    res.send.status(204);
  }
  catch(ex){
    next(ex);
  }
});

module.exports = app;