const { faker } = require('@faker-js/faker');

randomizeUser = () => {
    return {
        username: faker.internet.userName(),
        password: 'password',
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        isGuest: 0,
        isAdmin: 0,
        avatar: faker.image.avatar()
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

randomizeLineItem = () => {
    return {
        quantity: Math.floor((Math.random() * 3) + 1),
        orderId: 1,
        productId: Math.floor((Math.random() * 10) + 1)
    }
}

const USERS = [];
const PRODUCTS = [];
const LINEITEMS = [];

Array.from({length: 3}).forEach(()=>USERS.push(randomizeUser()));
Array.from({length: 10}).forEach(()=>PRODUCTS.push(randomizeProduct()));
Array.from({length: 2}).forEach(()=>LINEITEMS.push(randomizeLineItem()));

module.exports = {
    USERS,
    PRODUCTS,
    LINEITEMS,
    randomizeUser,
    randomizeProduct
}