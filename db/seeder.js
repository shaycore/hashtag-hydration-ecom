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

productSeed = (name,type,brand,size,color,price,description="none",image = 'https://i.postimg.cc/g09V6ryb/placeholder-image.jpg') => {
    return {
        name: name,
        type: type,
        description: description,
        brand: brand,
        size: size,
        color: color,
        image: image,
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

PRODUCTS.push(productSeed(
    'Takeya Actives Insulated Stainless Steel Water Bottle with Spout Lid',
    'Stainless Steel',
    'Takeya',
    '32 oz',
    'Black',
    31.91,
    "Bring the Heat, Keep your cool! No matter what you do to stay healthy, active, and fit, the Takeya Actives 32oz insulated stainless steel bottle will keep you going strong! Great for a big thirst or fewer refills... Chill-lock technology keeps your favorite drink ice cold for up to 24 hours so that you can stay refreshed and hydrated all day long. Crafted from pure, food grade 18/8 stainless steel, the BPA-free insulated bottles feature Takeya's exclusive Sport Lid, designed for active use.",
    "https://i.postimg.cc/7hnLvPjR/takeya-black-1.jpg"
));
PRODUCTS.push(productSeed(
    'Takeya Actives Insulated Stainless Steel Water Bottle with Spout Lid',
    'Stainless Steel',
    'Takeya',
    '32 oz',
    'Green',
    31.91,
    "Bring the Heat, Keep your cool! No matter what you do to stay healthy, active, and fit, the Takeya Actives 32oz insulated stainless steel bottle will keep you going strong! Great for a big thirst or fewer refills... Chill-lock technology keeps your favorite drink ice cold for up to 24 hours so that you can stay refreshed and hydrated all day long. Crafted from pure, food grade 18/8 stainless steel, the BPA-free insulated bottles feature Takeya's exclusive Sport Lid, designed for active use.",
    "https://i.postimg.cc/5tD5ypjV/takeya-green.jpg"
));
PRODUCTS.push(productSeed(
    'CamelBak Eddy+ 25oz Tritan Renew Water Bottle',
    'Plastic',
    'CamelBak',
    '25 oz',
    'Blue',
    15.95,
    "Flip, bite, and sip your way to sustainable daily hydration. The CamelBak Eddy+ everyday water bottle is now made with Tritan Renew, a highly durable and lightweight plastic made with 50% recycled material. Leak-proof when closed and spill-proof when open, the universal Eddy+ straw cap and bit-valve interface delivers a high flow and is compatible with Chute Mag and Carry Cap vessels. Tritan Renew is made with Polyester Renewal Technology, a recylcing process more efficient than standard recycling, producing new material with less demand on finite resources.",
    "https://i.postimg.cc/j5Zsv3NV/eddy-blue.jpg"
));
PRODUCTS.push(productSeed(
    'Hydroflask 32 oz Wide Mouth',
    'Stainless Steel',
    'Hydroflask',
    '32 oz',
    'Red',
    44.95,
    "Big enough for a whole day on the river or trails, our 32 oz Wide Mouth Bottle is made with professional-grade stainless steel and a wider opening for faster fill. And our Color Last™ powder coat is dishwasher safe for even more convenience. Cold stays ice cold for 24 hours, and hot stays wickedly hot for 12 — just like always.",
    "https://i.postimg.cc/1X3DYdjD/hydroflask-red.jpg"
));
PRODUCTS.push(productSeed(
    'Hydroflask 20 oz Wide Mouth',
    'Stainless Steel',
    'Hydroflask',
    '20 oz',
    'Green',
    32.95,
    "Perfect for morning hikes, afternoon ski lessons, or evenings by the campfire, our 20 oz Wide Mouth bottle is made with professional-grade stainless steel and a wider opening for faster fill. And our Color Last™ powder coat is dishwasher safe for even more convenience. Cold stays ice cold for 24 hours, and hot stays wickedly hot for 12 — just like always.",
    "https://i.postimg.cc/9F47Ry5X/green-hydro.jpg"
));
PRODUCTS.push(productSeed(
    'Hydroflask 40 oz Wide Mouth',
    'Stainless Steel',
    'Hydroflask',
    '40 oz',
    'White',
    49.95,
    "From road trips to endless hours at the beach, our 40 oz Wide Mouth bottle keeps you well-hydrated from sun up to sun down. And our Color Last™ powder coat is dishwasher safe for even more convenience. Cold stays ice cold for 24 hours, and hot stays wickedly hot for 12 — just like always.",
    "https://i.postimg.cc/WtRbJFgt/white-hydro.jpg"
));
PRODUCTS.push(productSeed(
    'Hydroflask 40 oz Wide Mouth',
    'Stainless Steel',
    'Hydroflask',
    '40 oz',
    'White',
    49.95,
    "From road trips to endless hours at the beach, our 40 oz Wide Mouth bottle keeps you well-hydrated from sun up to sun down. And our Color Last™ powder coat is dishwasher safe for even more convenience. Cold stays ice cold for 24 hours, and hot stays wickedly hot for 12 — just like always.",
    "https://i.postimg.cc/WtRbJFgt/white-hydro.jpg"
));
PRODUCTS.push(productSeed(
    'Yeti Rambler 18 oz Stainless Steel Water Bottle with Chug Cap',
    'Stainless Steel',
    'Yeti',
    '18 oz',
    'Pink',
    30.00,
    "The Rambler® 18 oz. Bottle is a necessary addition to your morning hikes, kayak trips, and daily commutes. This tough bottle is double-wall vacuum insulated to keep your water cold until the last sip, and dishwasher safe for easy cleaning. Separate your Rambler from the herd with your choice of stainless, DuraCoat™ Color and Seasonal finishes. This version of the Rambler Bottle comes with Rambler Bottle Triplehaul Cap.",
    "https://i.postimg.cc/NjdFdMwC/yeti-pink.jpg"
));
PRODUCTS.push(productSeed(
    'Yeti Rambler 26 oz Stainless Steel Water Bottle',
    'Stainless Steel',
    'Yeti',
    '26 oz',
    'Red',
    40.00,
    "This two-part cap is topped with a TripleHaul™ Handle for grab-and-go ease and anchored with an incredibly strong, clear spout so you’re always aware when a top off is needed. It’s also dishwasher safe and 100% leakproof. So go ahead and toss the whole bottle-and-cap combo in your gym bag, truck, raft — you get it — without thinking twice.",
    "https://i.postimg.cc/jS2td4Gv/yeti-red.jpg"
));
PRODUCTS.push(productSeed(
    'Yeti Rambler 30 oz Stainless Steel Tumblr with MagSlider Lid',
    'Stainless Steel',
    'Yeti',
    '30 oz',
    'Black',
    38.00,
    "The Rambler® 30 oz. is the tumbler that gets you through the day. Your morning brew stays hot, and your iced coffee will stay cold - so take your time. Kitchen-grade stainless steel with double-wall vacuum insulation will protect your drink at all costs. This Rambler Tumbler comes standard with the YETI MagSlider Lid, the only drink lid that uses the power of magnets to keep your water, beer, or favorite drink on lock.",
    "https://i.postimg.cc/4yXTC666/yeti-black.jpg"
));
PRODUCTS.push(productSeed(
    'Purist Mover 18 oz Union Top Water Bottle',
    'Glass',
    'Purist Collective',
    '18 oz',
    'Gray',
    48.00,
    "With technology inspired by the lotus effect, Purist Collective transforms silicon dioxide, one of the most fundamental elements on the earth, into a flawless interior glass finish that keeps drinks pure. Purist bottles are designed in California and made in China.",
    "https://i.postimg.cc/gkwgzwg8/purist-gray.jpg"
));
PRODUCTS.push(productSeed(
    'Purist Founder 32 oz Element Top Water Bottle',
    'Glass',
    'Purist Collective',
    '32 oz',
    'Black',
    56.00,
    "With technology inspired by the lotus effect, Purist Collective transforms silicon dioxide, one of the most fundamental elements on the earth, into a flawless interior glass finish that keeps drinks pure. Purist bottles are designed in California and made in China.",
    "https://i.postimg.cc/rw1Cs5x0/purist-black.jpg"
));

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