import axios from 'axios';

const SET_CART = 'SET_CART';
const DELETE_FROM_CART = "DELETE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";

const _deleteFromCart = (lineitem) => ({
  type: DELETE_FROM_CART,
  lineitem,
});

const _addToCart = (lineitem) => ({
  type: ADD_TO_CART,
  lineitem,
});


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

export const deleteFromCart = (item) => {
  return async(dispatch) => {
     await axios.delete('/api/orders/cart', item,  {
      headers: {
        authorization: window.localStorage.getItem('token')
      },
    });
    dispatch({type: DELETE_FROM_CART, _lineItem: item})
  };
};

export const addToCart = (newQuantity) => {
  return async(dispatch) => {
    const response = await axios.put('/api/orders/cart', newQuantity, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }, 
    });
    dispatch({type: ADD_TO_CART, _lineItem: response.data})
  };
};


const cart = (state = { lineItems: [ ] }, action)=> {
  if(action.type === SET_CART){
    return action.cart || state;
  }
  if (action.type === DELETE_FROM_CART) {
    return state.filter(lineItem => lineItem.id !== action.item.id)
  }
  if (action.type === ADD_TO_CART) {
    return state.map(lineItem => lineItem.id !== action._lineItem.id ? lineItem : action._lineItem)
  }
return state;
};

export default cart;
