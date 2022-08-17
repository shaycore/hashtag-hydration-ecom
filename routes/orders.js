const express = require('express');
const app = express.Router();
const { isLoggedIn } = require('./middleware');
const { Order } = require('../db');

module.exports = app;

app.post('/', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await req.user.createOrderFromCart());
  }
  catch(ex){
    next(ex);
  }

});

app.put('/cart', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await req.user.addToCart(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.get('/cart', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await req.user.getCart());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/', async(req, res, next)=> {
    try {
      res.send(await Order.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/', isLoggedIn, async(req, res, next)=> {
  try {
    res.status(201).send(await Order.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

app.put('/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const order = await Order.findByPk(req.params.id);
    res.send(await order.update(req.body));
  }
  catch(ex){
    next(ex); 
  }
});

app.delete('/:id', isLoggedIn, async(req, res, next)=> {
    try {
      const order = await Order.findByPk(req.params.id);
      await order.destroy();
      res.send.status(204);
    }
    catch(ex){
      next(ex);
    }
  });
