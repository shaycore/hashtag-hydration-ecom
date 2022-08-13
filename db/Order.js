const conn = require('./conn');
const { Sequelize } = conn;
const { BOOLEAN } = Sequelize;

const Order = conn.define('order', {
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
});

module.exports = Order;

