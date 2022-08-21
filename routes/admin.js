const express = require('express');
const app = express.Router();
const {models: {User, Order, Address, Product, LineItem }} = require('../db/');
const { isAdmin } = require('./middleware');

//Managing Users
app.get('/users', isAdmin, async(req, res, next) => {
  try{
    const users = await User.findAll({
      attributes: {
        exclude: ['password']
      },
      include: [{model: Order, include: {model: LineItem}}, {model: Address}]
    });
    res.send(users);
  }
  catch(err){
    next(err)
  }
});

app.delete('/users/:id', isAdmin, async(req, res, next) => {
  try{
    const user = await User.findByPk(req.params.id);
    if(!user.isAdmin) {
      await user.destroy();
      res.sendStatus(204)
    }
    else {
      const error = Error('Unable to delete administrators')
      error.status = 401;
      throw error
    }

  }
  catch(err){
    next(err)
  }
});

app.put('/users/:id', isAdmin, async(req, res, next)=> {
  try{
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    const updatedUser = await User.findByPk(user.id, {
      attributes: {
        exclude: ['password']
      },
      include: [{model: Order, include: {model: LineItem}}, {model: Address}]
    })
    res.send(updatedUser)
  }
  catch(err){
    next(err)
  }
})

//Managing Products
// app.get('/products', isAdmin, async(req, res, next)=> {
//   try{
//     const products = await Product.findAll()
//     res.send(products)
//   }
//   catch(err){
//     next(err)
//   }
// });

// app.get('/products/:id', isAdmin, async(req, res, next) => {
//   try{
//     const product = await Product.findByPk(req.params.id)
//     res.send(product)
//   }
//   catch(err){
//     next(err)
//   }
// })


// app.post('/products', isAdmin, async(req, res, next) => {
//   try{
//     const product = await Product.create(req.body);
//     res.send(product)
//   }
//   catch(err){
//     next(err)
//   }
// })


// app.put('/products/:id', isAdmin, async(req, res, next) => {
//   try{
//     const product = await Product.findByPk(req.params.id);
//     await product.update(req.body);
//     res.send(product)
//   }
//   catch(err){
//     next(err)
//   }
// });


// app.delete('/products/:id', async(req, res, next) => {
//   try{
//       const product = await Product.findByPk(req.params.id)
//       await product.destroy();
//       res.sendStatus(204)
//   }
//   catch(err){
//       next(err)
//   }
// })

//Managing Orders
app.get('/orders', isAdmin, async(req, res, next) => {
  try{
    const orders = await Order.findAll({
      include: [{model: LineItem}, {model: User}]
    });
    res.send(orders)
  }
  catch(err){
    next(err)
  }
});

app.get('/orders/:id', isAdmin, async(req, res, next) => {
  try{
    const order = await Order.findByPk(req.params.id, {
      include: [{model: LineItem}, {model: User}]
    });
    res.send(order);
  }
  catch(err){
    next(err)
  }
});

app.delete('/orders/:id', isAdmin, async(req, res, next) => {
  try{
    const order = await Order.findByPk(req.params.id);
    await order.destroy();
    res.sendStatus(204)
  }
  catch(err){
    next(err)
  }
});


app.put('/orders/:id', isAdmin, async(req, res, next) => {
  try{
    const order = await Order.findByPk(req.params.id);
    await order.update(req.body)
    const updatedOrder = await Order.findByPk(order.id, {
      include: [{model: LineItem}, {model: User}]
    });
    res.send(updatedOrder)
  }
  catch(err){
    next(err)
  }
});

app.put('/orders/lineItems/update/:id', isAdmin, async(req, res, next) => {
    try{
      const lineItem = await LineItem.findByPk(req.params.id)
      await lineItem.update(req.body);
      res.sendStatus(200);
    }
    catch(err){
      next(err)
    }
  });
  
app.post('/orders/lineItem', isAdmin, async(req, res, next) => {
    try{
      const lineItem = await LineItem.create(req.body);
      res.send(lineItem)
    }
    catch(err){
      next(err)
    }
  })