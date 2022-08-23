import axios from 'axios';
import { History } from 'history';

const auth = (state = {}, action)=> {
  if(action.type === 'SET_AUTH'){
    state = action.auth;
  }
  if(action.type === 'UPDATE_AUTH'){
    state = action.user;
  }
  return state;
};

export const logout = (history)=> {
  return (dispatch)=> {
    window.localStorage.removeItem('token');
    dispatch({ type: 'SET_AUTH', auth: {}});
    history.push('/signin')
  };
};

export const exchangeToken = ()=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    if(token){
      const response = await axios.get('/api/sessions', {
        headers: {
          authorization: token
        }
      });
      const auth = response.data;
      dispatch({ auth, type: 'SET_AUTH'});
    }
  };
};
export const login = (credentials, history)=> {
  return async(dispatch)=> {
    let response = await axios.post('/api/sessions', credentials);
    const { token } = response.data;
    window.localStorage.setItem('token', token); 
    response = await axios.get('/api/sessions', {
      headers: {
        authorization: token
      }
    });
    const auth = response.data;
    dispatch({ auth, type: 'SET_AUTH'});
    history.push('/')
  };
};

export const updateUser = (user) => {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token){
      const response = await axios.put(`/api/users/${ user.id }`, user, {
        headers: {
          authorization: token
        }
      });
      user = response.data;
      dispatch({ type: 'UPDATE_AUTH', user })
    }
  }
}
  
export default auth;
