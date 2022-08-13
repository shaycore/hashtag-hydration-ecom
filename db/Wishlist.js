const conn = require('./conn');
const { Sequelize } = conn;
const { STRING } = Sequelize;

const Wishlist = conn.define('wishlist', {
    name: {
        type: STRING
    }
});

module.exports = Wishlist;

