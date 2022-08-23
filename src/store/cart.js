import axios from 'axios';



const cart = (state = { lineItems: [ ] }, action)=> {
  if(action.type === 'SET_CART'){
    state = action.cart;
  }
  else if(action.type === 'EMPTY_CART') {
    state = { lineItems: [ ] };
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

export const clearCart = () => {
  return { 
    type: 'EMPTY_CART'
  }
}

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

export const getCartTotal = () => {
  const lineItems = getState().cart.lineItems
  const cartTotal = lineItems &&
    lineItems.reduce((acc, item) => {
      acc += item.quantity * item.product?.price;
      return acc;
    }, 0);
  return cartTotal * 1;
}


export default cart;