import axios from 'axios';
const wishlist = (state = { wishlistProducts: [ ] }, action)=> {
  if(action.type === 'SET_WISHLIST'){
    state = action.wishlist;
  }
  return state;
};

export const fetchWishlist = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/wishlist', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch({ type: 'SET_WISHLIST', wishlist: response.data });

  };
};

export const addToWishlist = (product)=> {
  return async(dispatch)=> {
    const response = await axios.put('/api/wishlist', { product }, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch({ type: 'SET_WISHLIST', wishlist: response.data });

  };
};

export default wishlist;