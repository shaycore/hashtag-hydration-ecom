const express = require('express');
const app = express.Router();
const { isLoggedIn } = require('./middleware');
const { Coupon } = require('../db');

module.exports = app;

app.get('/', async(req, res, next)=> {
    try {
      res.send(await Coupon.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/', isLoggedIn, async(req, res, next)=> {
  try {
    res.status(201).send(await Coupon.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

app.put('/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const coupon = await Coupon.findByPk(req.params.id);
    res.send(await coupon.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/:id', isLoggedIn, async(req, res, next)=> {
    try {
      const coupon = await Coupon.findByPk(req.params.id);
      await coupon.destroy();
      res.send.status(204);
    }
    catch(ex){
      next(ex);
    }
  });
