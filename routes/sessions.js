const { default: axios } = require('axios');
const express = require('express');
const app = express.Router();
const { User } = require('../db');
const { isLoggedIn } = require('./middleware');

module.exports = app;

app.post('/', async(req, res, next)=> {
  try {
    const credentials = {
      username: req.body.username, 
      password: req.body.password
    }
    res.send({ token: await User.authenticate(credentials)});
  }
  catch(ex){
    next(ex);
  }
});

app.get('/', isLoggedIn, async(req, res, next) => {
  res.send(req.user);
});

app.get('/github', (req, res, next) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`);
});

app.get('/github/callback', async(req, res, next) => {
  try {
    let response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: req.query.code
    }, {
      headers: {
        accept: 'application/json'
      }
    });
    const { error, access_token } = response.data;
    if(error){
      const ex = new Error(error);
      ex.status = 401;
      next(ex);
    }
    else {
      response = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${ access_token }`
        }
      });
      const { login, email, id, name } = response.data;
      const where = {
        username: login,
        email: email,
        githubId: id,
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1]
      };
      let user = await User.findOne({ where });
      if(!user){
        user = await User.create({ ...where, password: 'password' });
      }
      const token = require('jsonwebtoken').sign({ id: user.id }, process.env.JWT);
      res.send(`
        <html>
          <head>
            <script>
              window.localStorage.setItem('token', '${ token }');
              window.location = '/';
            </script>
          </head>
          <body>
          ...Signing In
          </body>
        </html>
      `);
    }
  }
  catch(ex){
    next(ex);
  }
});