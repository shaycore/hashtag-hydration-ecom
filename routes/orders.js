const express = require('express');
const app = express.Router();
const { isLoggedIn, isAdmin } = require('./middleware');
const { LineItem } = require('../db');
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

app.get('/', isAdmin, async(req, res, next)=> {
  try {
    res.send(await Order.findAll({
      where: { isCart: false },
    }));
  }
  catch(ex){
    next(ex);
  }
});

app.post('/order-payment', async (req, res) => {
  const { Product } = req.body;
  console.log(Product);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(Product.price),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
      description: Product.description,
      payment_method: id,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
