const { faker } = require('@faker-js/faker');

randomizeUser = () => {
    return {
        username: faker.internet.userName(),
        password: 'password',
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        isGuest: 0,
        isAdmin: 0
    }
}

randomizeProduct = () => {
    return {
        name: faker.commerce.productName(),
        type: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        size: "XL",
        color: faker.color.human(),
        image: `${faker.image.fashion(250,250)}?random=${Math.round(Math.random() * 100)}`,
        price: faker.commerce.price()
    }
}

const USERS = [];
const PRODUCTS = [];

Array.from({length: 3}).forEach(()=>USERS.push(randomizeUser()));
Array.from({length: 10}).forEach(()=>PRODUCTS.push(randomizeProduct()));

module.exports = {
    USERS,
    PRODUCTS,
    randomizeUser,
    randomizeProduct
}