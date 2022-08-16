const conn = require('./conn');
const { Sequelize } = conn;

const LineItem = conn.define('lineitem', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1
    }
  }
});

module.exports = LineItem;


