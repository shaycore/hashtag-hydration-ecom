const conn = require('./conn');
const { Sequelize } = conn;
const Product = require('./Product');
const User = require('./User');
const LineItem = require('./LineItem');
const Order = require('./Order');
const Address = require('./Address');
const Review = require('./Review');
const Wishlist = require('./Wishlist');
const WishlistProduct = require('./WishlistProduct');
const Coupon = require('./Coupon');
const { USERS, PRODUCTS, LINEITEMS, REVIEWS } = require('./seeder');

User.hasMany(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);

User.hasMany(Address);
User.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Product);
Product.hasMany(Review);
Coupon.belongsTo(Order);
Wishlist.belongsTo(User);
Wishlist.hasMany(WishlistProduct);
WishlistProduct.belongsTo(Product);
Order.belongsTo(Address);
Address.belongsTo(User);

const syncAndSeed = async() => {
  await conn.sync({ force: true });
  const people = await Promise.all(
    USERS.map((user)=> User.create(user))
  );
  const items = await Promise.all(
    PRODUCTS.map((product)=> Product.create(product))
  );
  const prof = await User.create({ 
    username: 'prof', 
    password: 'password',
    firstName: 'professor',
    lastName: 'prof',
    email: 'professor@fullstackacademy.com',
    isGuest: false,
    isAdmin: false,
    avatar: 'https://ca.slack-edge.com/T024FPYBQ-U07DRD24A-f46366808257-512'
  });
  const admin = await User.create({ 
    username: 'admin', 
    password: 'password',
    email: 'admin@fullstackacademy.com',
    isGuest: false,
    isAdmin: true,
    avatar: 'http://cdn.onlinewebfonts.com/svg/img_325788.png'
  });
  await Promise.all(
    REVIEWS.map((review)=> Review.create(review))
  );
  
  //Seed Past Orders
  await people[0].addToCart({ product: items[0], quantity: 1});
  await people[0].addToCart({ product: items[1], quantity: 2});
  await people[0].createOrderFromCart();
  await people[1].addToCart({ product: items[2], quantity: 1});
  await people[1].addToCart({ product: items[3], quantity: 2});
  await people[1].createOrderFromCart();
  await people[1].addToCart({ product: items[4], quantity: 1});
  await people[1].addToCart({ product: items[5], quantity: 1});
  await people[1].addToCart({ product: items[6], quantity: 1});
  await people[1].createOrderFromCart();
  //Seed Cart data for Prof Test User
  await prof.addToCart({ product: items[1], quantity: 1});
  await prof.addToCart({ product: items[2], quantity: 2});
  await prof.addToCart({ product: items[3], quantity: 3});
  //Seed Wishlist
  await prof.addToWishlist({ product: items[4] });
  await prof.addToWishlist({ product: items[5] });
};


module.exports = {
  conn,
  User,
  Product,
  LineItem,
  Order,
  Review,
  syncAndSeed
};
