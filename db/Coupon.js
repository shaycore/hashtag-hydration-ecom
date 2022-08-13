const conn = require('./conn');
const { Sequelize } = conn;
const { INTEGER, ENUM } = Sequelize;

const Coupon = conn.define('coupon', {
  value: {
    type: INTEGER
  },
  type: {
    type: ENUM('PERCENT','DOLLAR'),
    defaultValue: 'PERCENT',
    allowNull: false,
    validate: {
      isIn: [['PERCENT', 'DOLLAR']]
    }
  }

});

module.exports = Coupon;

