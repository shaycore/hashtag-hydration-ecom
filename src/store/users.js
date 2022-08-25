import axios from 'axios';

const users = (state = [], action)=> {
  if (action.type === 'SET_USERS') {
    return action.users || state;
  }
  if (action.type === 'CREATE_USER') {
    return [...state, action.user];
  }
  if (action.type === 'DELETE_USER') {
    return state.filter(user => user.id !== action.user.id);
  }
  if (action.type === 'UPDATE_USER') {
    return state.map((user) => user.id === action.user.id ? action.user: user);
  }
  return state;
};

export const fetchUsers = ()=> {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token) {
      let users = (await axios.get('/api/users', {
          headers: {
              authorization: token
          }
      })).data;
      dispatch({ type: 'SET_USERS', users });    
    };
  };
};  

export const createUser = (user) => {
  return async(dispatch) => {
    user = (await axios.post('/api/users', user)).data;
    dispatch({ type: 'CREATE_USER', user });  
  };
};

export const deleteUser = (user, history) => {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token) {
      await axios.delete(`/api/users/${ user.id }`, {
        headers: {
          authorization: token
        }
      });
      dispatch({ type: 'DELETE_USER', user});
      history.push('/admin/users')
    }
  }
}

export default users;
