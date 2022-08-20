const conn = require('./conn');
const { Sequelize } = conn;
const { STRING, DECIMAL, TEXT, VIRTUAL } = Sequelize;

const Product = conn.define('product', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  type: {
    type: STRING
  },
  description: {
    type: TEXT
  },
  brand: {
    type: TEXT
  },
  size: {
    type: STRING,
    allowNull: false,
    defaultValue: "O/S"
  },
  color: {
    type: STRING,
    allowNull: false
  },
  image: {
    type: TEXT
  },
  price: {
    type: DECIMAL(),
    allowNull: false
  },
  rating: {
    type: VIRTUAL,
    get: function() {
      return "Not Available";
    }
  }

});

module.exports = Product;

