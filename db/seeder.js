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
        brand: faker.commerce.productName(),
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

productSeed = (name,type,brand,size,color,price) => {
    return {
        name: name,
        type: type,
        description: faker.commerce.productDescription(),
        brand: brand,
        size: size,
        color: color,
        image: `https://i.postimg.cc/g09V6ryb/placeholder-image.jpg`,
        price: price
    }
}

reviewSeed = (rating,review) => {
    return {
        rating: rating,
        review: review,
        userId: Math.floor((Math.random() * 4) + 1),
        productId: Math.floor((Math.random() * 3) + 1)
    }
}

const USERS = [];
const PRODUCTS = [];
const LINEITEMS = [];
const REVIEWS = [];

PRODUCTS.push(productSeed('Takeya Actives Insulated Water Bottle Small','Stainless Steel','Takeya','22 oz','Purple',24.75));
PRODUCTS.push(productSeed('Takeya Actives Insulated Water Bottle Large','Stainless Steel','Takeya','40 oz','Lilac',35.99));
PRODUCTS.push(productSeed('Hydro Flask Standard Mouth','Stainless Steel','Hydro Flask','21 oz','Green',35.00));
PRODUCTS.push(productSeed('Hydro Flask Standard Mouth','Stainless Steel','Hydro Flask','21 oz','Blue',35.00));
PRODUCTS.push(productSeed('CamelBak Eddy+','Plastic','CamelBak','25 oz','Blue',16.00));
PRODUCTS.push(productSeed('Purifyou Premium','Glass','Purifyou','22 oz','Blue',20.00));
PRODUCTS.push(productSeed('CamelBak Podium','Plastic','CamelBak','21 oz','Clear',11.00));
PRODUCTS.push(productSeed('Purist Mover','Glass','Purist','18 oz','Gray',48.00));
PRODUCTS.push(productSeed('Yeti Rambler Bottle','Metal','Yeti','18 oz','Yellow',30.00));
PRODUCTS.push(productSeed('Yeti Rambler Jr Bottle','Metal','Yeti','12 oz','Pink',25.00));

REVIEWS.push(reviewSeed(5,"I love this bottle so much!"));
REVIEWS.push(reviewSeed(5,"I use this thing every day, it meets all my hydration needs!"));
REVIEWS.push(reviewSeed(2, "Meh, I've had better..."));
REVIEWS.push(reviewSeed(4,"Not the best I've ever had, but certainly not the worst."));
REVIEWS.push(reviewSeed(5,"Can't go wrong with this brand - love it!"));
REVIEWS.push(reviewSeed(1,"Are you kidding me? I'd rather die of dehydration than use this bottle..."));
REVIEWS.push(reviewSeed(3,"It'll do."));
REVIEWS.push(reviewSeed(4,"Came to me a little scratched up but I really like it!"));


// Array.from({length: 10}).forEach(()=>PRODUCTS.push(randomizeProduct()));
Array.from({length: 3}).forEach(()=>USERS.push(randomizeUser()));
Array.from({length: 2}).forEach(()=>LINEITEMS.push(randomizeLineItem()));

module.exports = {
    USERS,
    PRODUCTS,
    LINEITEMS,
    REVIEWS,
    randomizeUser,
    randomizeProduct
}