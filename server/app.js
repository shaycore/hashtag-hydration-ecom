const express = require('express');
const app = express();
const { User } = require('../db');
const path = require('path');

app.use(express.json());
app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.use('/api/orders', require('../routes/orders'));
app.use('/api/sessions', require('../routes/sessions'));
app.use('/api/lineitems', require('../routes/lineitems'));
app.use('/api/users', require('../routes/users'));
app.use('/api/products', require('../routes/products'));
app.use('/api/reviews', require('../routes/reviews'));
app.use('/api/addresses', require('../routes/addresses'));
app.use('/api/wishlists', require('../routes/wishlists'));
app.use('/api/wishlistProducts', require('../routes/wishlistProducts'));

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
