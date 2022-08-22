const conn = require('./conn');
const { Sequelize } = conn;
const { INTEGER } = Sequelize;

const Wishlist = conn.define('wishlist', {
    userId: {
        type: INTEGER,
        allowNull: false
    }
});

module.exports = Wishlist;

