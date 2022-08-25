require('./.env');
const port = process.env.PORT || 3000;
const app = require('./app');
const db = require('../db');


const init = async()=> {
  try {
    await db.syncAndSeed();

    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();
