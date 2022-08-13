const conn = require('./conn');
const { Sequelize } = conn;
const { TEXT, INTEGER } = Sequelize;

const Review = conn.define('review', {
    rating: {
        type: INTEGER,
        defaultValue: 3
    },
    review: {
        type: TEXT
    }
});

Review.beforeUpdate(review => {
    if(review.rating > 5 || review.rating < 0) {
        throw new Error("Please keep your review between 1 and 5!");
    }
});

module.exports = Review;

