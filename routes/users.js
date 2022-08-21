const express = require('express');
const app = express.Router();
const { isLoggedIn, isAdmin } = require('./middleware');
const { User } = require('../db');

module.exports = app;

app.get('/', async(req, res, next)=> {
    try {
      res.send(await User.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/', isLoggedIn, async(req, res, next)=> {
  try {
    res.status(201).send(await User.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

//for logged-in user - updaing user profile
app.put('/:id', isLoggedIn, async(req, res, next)=> {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  }
  catch(ex){
    next(ex);
  }
});

//for Admin - deleting user
app.delete('/:id', isAdmin, async(req, res, next)=> {
    try {
      const user = await User.findByPk(req.params.id);
      await user.destroy();
      res.sendStatus(204);
    }
    catch(ex){
      next(ex);
    }
  });
