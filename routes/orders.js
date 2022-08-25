const express = require('express');
const app = express.Router();
const { isLoggedIn, isAdmin } = require('./middleware');
const { LineItem, Product } = require('../db');
const { Order } = require('../db');
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())


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
      include: LineItem
    }));
  }
  catch(ex){
    next(ex);
  }
});

//need to swap to Jonathan's route for stripe
app.post('/order-payment', cors(), async (req, res) => {
  let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount: 100,
			currency: "USD",
			description: 'water bottle',
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.post('/', isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.createOrderFromCart());
  } catch (ex) {
    next(ex);
  }
});
