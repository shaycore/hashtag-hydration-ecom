const express = require('express');
const app = express.Router();
const { isLoggedIn, isAdmin } = require('./middleware');
const { Product } = require('../db');

module.exports = app;

app.get('/', async(req, res, next)=> {
    try {
      res.send(await Product.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/', isAdmin, async(req, res, next)=> {
  try {
    res.status(201).send(await Product.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

app.put('/:id', isAdmin, async(req, res, next)=> {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/:id', isAdmin, async(req, res, next)=> {
    try {
      const product = await Product.findByPk(req.params.id);
      await product.destroy();
      res.send.status(204);
    }
    catch(ex){
      next(ex);
    }
  });
