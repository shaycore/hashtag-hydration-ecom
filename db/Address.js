const conn = require('./conn');
const { Sequelize } = conn;
const { STRING, INTEGER, ENUM } = Sequelize;

const countries = ["USA", "Canada", "Mexico"];

const Address = conn.define("address", {
  firstName: {
    type: STRING,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: STRING,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  city: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  zipCode: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  country: {
    type: STRING,
    allowNull: false,
    defaultValue: "United States",
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Address;

