const express = require('express');
const app = express.Router();
const { isLoggedIn, isAdmin } = require('./middleware');
const { Review } = require('../db');

module.exports = app;

app.get('/', async(req, res, next)=> {
  try {
    res.send(await Review.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.post('/', isLoggedIn, async(req, res, next)=> {
  try {
    res.status(201).send(await Review.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

app.put('/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const review = await Review.findByPk(req.params.id);
    res.send(await review.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/:id', isLoggedIn, async(req, res, next)=> {
    try {
      const review = await Review.findByPk(req.params.id);
      await review.destroy();
      res.send.status(204);
    }
    catch(ex){
      next(ex);
    }
  });
