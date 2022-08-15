const { DECIMAL } = require('sequelize');
const conn = require('./conn');
const { Sequelize } = conn;

const Order = conn.define('order', {
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  total : {
    type: Sequelize.DECIMAL(10,2)
  }
});

module.exports = Order;

