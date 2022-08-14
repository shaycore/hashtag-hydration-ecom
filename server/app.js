const express = require('express');
const app = express();
app.use(express.json());
const { User } = require('../db');
const path = require('path');

app.use('/dist', express.static('dist'));

const isLoggedIn = async(req, res, next)=> {
  try {
    req.user = await User.findByToken(req.headers.authorization);
    next();
  }
  catch(ex){
    next(ex);
  }
};

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.use('/api/orders', require('../routes/orders'));
app.use('/api/sessions', require('../routes/sessions'));
app.use('/api/users', require('../routes/users'));
app.use('/api/products', require('../routes/products'));
app.use('/api/reviews', require('../routes/reviews'));
app.use('/api/addresses', require('../routes/addresses'));
app.use('/api/wishlists', require('../routes/wishlists'));

// app.get('/api/users', async(req, res, next)=> {
//   try {
//     res.send(await User.findAll());
//   }
//   catch(ex){
//     next(ex);
//   }
// });

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
