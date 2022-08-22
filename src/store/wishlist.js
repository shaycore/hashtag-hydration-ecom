import axios from 'axios';
const wishlist = (state = { wishlistProducts: [ ] }, action)=> {
  if(action.type === 'SET_WISHLIST'){
    state = action.wishlist;
  }
  return state;
};


// export const addToCart = (product, diff)=> {
//   return async(dispatch, getState)=> {
//     const lineItem = getState().cart.lineItems.find(lineItem => lineItem.productId === product.id) || { quantity: 0};
//     const response = await axios.put('/api/orders/cart', { product, quantity: lineItem.quantity + diff}, {
//       headers: {
//         authorization: window.localStorage.getItem('token')
//       }
//     });
//     dispatch({ type: 'SET_CART', cart: response.data });

//   };
// };

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


export default wishlist;