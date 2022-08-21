const { User } = require('../db');

const isLoggedIn = async(req, res, next)=> {
  try {
    req.user = await User.findByToken(req.headers.authorization);
    next();
  }
  catch(ex){
    next(ex);
  }
};

const isAdmin = async(req, res, next) => {
  try{
    req.user = await User.isAdmin(req.headers.authorization);
    next();
  }
  catch(err){
    next(err)
  }
};

module.exports = {
  isLoggedIn,
  isAdmin
};
