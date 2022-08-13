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
const { USERS, PRODUCTS } = require('./seeder');

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
};


module.exports = {
  conn,
  User,
  Product,
  LineItem,
  Order,
  syncAndSeed
};
