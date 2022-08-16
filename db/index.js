const conn = require('./conn');
const { Sequelize } = conn;
const Product = require('./Product');
const User = require('./User');
const LineItem = require('./LineItem');
const Order = require('./Order');
const Address = require('./Address');
const Review = require('./Review');
const Wishlist = require('./Wishlist');
const Coupon = require('./Coupon');
const { USERS, PRODUCTS, LINEITEMS } = require('./seeder');

User.hasMany(Order);
User.hasMany(Address);
User.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Product);
Product.hasMany(Review);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);
Coupon.belongsTo(Order);
Wishlist.belongsTo(User);
Wishlist.hasMany(Product);
Order.belongsTo(Address);
Address.belongsTo(User);

const syncAndSeed = async() => {
  await conn.sync({ force: true });
  await Promise.all(
    USERS.map((user)=> User.create(user))
  );
  await Promise.all(
    PRODUCTS.map((product)=> Product.create(product))
  );
  const prof = await User.create({ 
    username: 'prof', 
    password: 'password',
    firstName: 'professor',
    lastName: 'prof',
    email: 'professor@fullstackacademy.com',
    isGuest: false,
    isAdmin: false
  });
  const admin = await User.create({ 
    username: 'admin', 
    password: 'password',
    email: 'admin@fullstackacademy.com',
    isGuest: false,
    isAdmin: true
  });
  await Order.create({ id: 1, userId: prof.id });
  await Promise.all(
    LINEITEMS.map((lineitem)=> LineItem.create(lineitem))
  );
};


module.exports = {
  conn,
  User,
  Product,
  LineItem,
  Order,
  syncAndSeed
};
