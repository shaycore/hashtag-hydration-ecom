import axios from 'axios';
const cart = (state = { lineItems: [ ] }, action)=> {
  if(action.type === 'SET_CART'){
    state = action.cart;
  }
  return state;
};


export const addToCart = (product, diff)=> {
  return async(dispatch, getState)=> {
    const lineItem = getState().cart.lineItems.find(lineItem => lineItem.productId === product.id) || { quantity: 0};
    const response = await axios.put('/api/orders/cart', { product, quantity: lineItem.quantity + diff}, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch({ type: 'SET_CART', cart: response.data });

  };
};

export const clearCart = (state, action)=> {
  state.cart.lineItems = []
  return async(dispatch)=> {
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch({ type: 'SET_CART', cart: response.data });

  };
};

export const fetchCart = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch({ type: 'SET_CART', cart: response.data });

  };
};


export default cart;