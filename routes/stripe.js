const express = require("express");
const app = express.Router();
const { isLoggedIn } = require("./middleware");

const key = process.env.STRIPE_KEY || "sk_test_4eC39HqLyjWDarjtT1zdp7dc";
/*const PUBLIC_KEY = 'pk_test_51LZy6BESE3LZBw3Fhr3frR15agaT6lrOEc3HLwbNUB0Wq20hlXBWrtseBFocU5Tggu29cWUBvOlIhk7QeG2BvkBi00bOxgKfQD';
const stripeTestPromise = loadStripe(PUBLIC_KEY);
*/

const stripe = require("stripe")(key);
const YOUR_DOMAIN = process.env.HEROKU_DOMAIN || "http://localhost:3000";

app.post("/", isLoggedIn, async (req, res, next) => {
  try {

    const cart = await req.user.getCart()
    const lineItems = cart.lineItems;
    console.log(lineItems[0].product.price);
    

    const session = await stripe.checkout.sessions.create({
      client_reference_id: cart.id,
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cart.lineItems.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product.name,
              images: [item.product.image],
            },
            unit_amount: item.product.price * 100,
          },
          quantity: item.quantity,
        };
      }),

      success_url: `${YOUR_DOMAIN}/#/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/#/cart?canceled=true`,
    });

    res.json(session.url);
  } catch (ex) {
    next(ex);
  }
});

app.get("/checkout-session", isLoggedIn, async (req, res, next) => {
  try {
    const { sessionId } = req.query;
    console.log(req.query);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    /**
     * If the payment is successful, you can get the cart.id from the session.client_reference_id
     * You can se the isCart to false.
     */
    const cart =  User.getCart;
     if (session.payment_status === "paid") {
       cart.update({ isCart: false });
     }

    res.send(session);
  } catch (err) {
    next(err);
  }
});

module.exports = app;