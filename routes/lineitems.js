const express = require('express');
const app = express.Router();
const { isLoggedIn } = require('./middleware');
const { LineItem } = require('../db');

module.exports = app;

app.get('/', async(req, res, next)=> {
    try {
      res.send(await Product.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/', isLoggedIn, async(req, res, next)=> {
  try {
    res.status(201).send(await LineItem.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

app.put('/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const lineitem = await LineItem.findByPk(req.params.id);
    res.send(await lineitem.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/:id', isLoggedIn, async(req, res, next)=> {
    try {
      const lineitem = await LineItem.findByPk(req.params.id);
      await lineitem.destroy();
      res.send.status(204);
    }
    catch(ex){
      next(ex);
    }
  });
