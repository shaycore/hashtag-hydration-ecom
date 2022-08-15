import axios from 'axios';

const users = (state = [], action)=> {
  if (action.type === 'SET_USERS') {
    return action.users;
  }
  if (action.type === 'CREATE_USERS') {
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
    const products = (await axios.get('/api/users')).data;
    dispatch({ type: 'SET_USERS', users });
  };
};  

export const createUsers = (user) => {
  return async(dispatch) => {
    user = (await axios.post('/api/users', user)).data;
  };
};

export const deleteUser = (user) => {
  return async(dispatch) => {
      await axios.delete(`/api/users/${ user.id }`);
      dispatch({ type: 'DELETE_USER', user});
  }
}

export const updateUser = (user) => {
  return async(dispatch) => {
      user = (await axios.put(`/api/users/${ user.id }`, user )).data;
      dispatch({ type: 'UPDATE_USER', user })
  }
}

export default users;
