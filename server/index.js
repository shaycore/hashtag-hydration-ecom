const port = process.env.PORT || 3000;
const app = require('./app');
const db = require('../db');

const init = async()=> {
  try {
    await db.syncAndSeed();

    // await User.create({ username: 'moe', password: 'moe_pw'});
    // const lucy = await User.create({ username: 'lucy', password: 'lucy_pw'});
    // const foo = await Product.create({ name: 'foo' }); 
    // const bar = await Product.create({ name: 'bar' }); 
    // await lucy.addToCart({ product: foo, quantity: 3 });
    // await lucy.addToCart({ product: bar, quantity: 4 });

    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();
