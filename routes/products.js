const express = require('express');
const app = express.Router();
const { isLoggedIn } = require('./middleware');
const { Product } = require('../db');

module.exports = app;

app.get('/products', async(req, res, next)=> {
    try {
      res.send(await Product.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/products', isLoggedIn, async(req, res, next)=> {
  try {
    res.status(201).send(await Product.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

app.put('/products/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/products/:id', isLoggedIn, async(req, res, next)=> {
    try {
      const product = await Product.findByPk(req.params.id);
      await product.destroy();
      res.send.status(204);
    }
    catch(ex){
      next(ex);
    }
  });
