const express = require('express');
const app = express.Router();
const { isLoggedIn } = require('./middleware');
const { Addresses } = require('../db');

module.exports = app;

app.get('/addresses', async(req, res, next)=> {
    try {
      res.send(await Address.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/addresses', isLoggedIn, async(req, res, next)=> {
  try {
    res.status(201).send(await Address.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

app.put('/addresses/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const address = await Address.findByPk(req.params.id);
    res.send(await address.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/addresses/:id', isLoggedIn, async(req, res, next)=> {
    try {
      const address = await Address.findByPk(req.params.id);
      await address.destroy();
      res.send.status(204);
    }
    catch(ex){
      next(ex);
    }
  });
