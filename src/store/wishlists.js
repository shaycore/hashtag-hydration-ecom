import axios from 'axios';

const wishlists = (state = [], action)=> {
  if (action.type === 'SET_WISHLISTS') {
    return action.wishlists;
  }
  return state;
};

export const fetchWishlists = ()=> {
  return async(dispatch) => {
    const wishlists = (await axios.get('/api/wishlists')).data;
    dispatch({ type: 'SET_WISHLISTS', wishlists });
  };
};  

export default wishlists;