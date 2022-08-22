const express = require('express');
const app = express.Router();
const { isLoggedIn } = require('./middleware');
const { Wishlist } = require('../db');

module.exports = app;

app.get('/', isLoggedIn, async(req, res, next)=> {
    try {
      res.send(await req.user.getWishlist());
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/', isLoggedIn, async(req, res, next)=> {
    try {
      res.send(await req.user.addToWishlist(req.body));
    }
    catch(ex){
      next(ex);
    }
});

// });

// app.put('/:id', isLoggedIn, async(req, res, next)=> {
//   try {
//     const wishlists = await Wishlists.findByPk(req.params.id);
//     res.send(await wishlists.update(req.body));
//   }
//   catch(ex){
//     next(ex);
//   }
// });

// app.delete('/:id', isLoggedIn, async(req, res, next)=> {
//     try {
//       const wishlists = await Wishlist.findByPk(req.params.id);
//       await wishlists.destroy();
//       res.send.status(204);
//     }
//     catch(ex){
//       next(ex);
//     }
//   });
