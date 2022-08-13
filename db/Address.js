const conn = require('./conn');
const { Sequelize } = conn;
const { STRING } = Sequelize;

const Address = conn.define('address', {
    address: {
        type: STRING,
        isNull: false
    }
});

module.exports = Address;

