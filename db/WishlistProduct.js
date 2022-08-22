const conn = require('./conn');
const { Sequelize } = conn;
const { INTEGER } = Sequelize;

const WishlistProduct = conn.define('wishlistProduct', {
    wishlistId: {
        type: INTEGER,
        allowNull: false
    },
    productId: {
        type: INTEGER,
        allowNull: false
    }
});

module.exports = WishlistProduct;

