import axios from 'axios';


const DELETE_FROM_CART = "DELETE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_QTY = 'UPDATE_CART';

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

export const updateQuantity = (newQuantity) => {
  return async(dispatch) => {
    const response = await axios.put('/api/orders/cart', newQuantity, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }, 
    });
    dispatch({type: UPDATE_QTY, _lineItem: response.data})
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

export const addToCart = (product, quantity) => {
  return async(dispatch) => {
    console.log("received",product, quantity)
    try {
      const data = (await axios.put('/api/orders/cart',{ product, quantity }, {
        headers: {
          authorization: window.localStorage.getItem('token')
        }
      })).data;
      dispatch(_addToCart(data));
    } catch (ex) {
      console.log(ex);
    }
  }
};


const cart = (state = { lineItems: [ ] }, action)=> {
  if(action.type === 'SET_CART'){
    return action.cart || state;
  }
  if (action.type === DELETE_FROM_CART) {
    return {
      ...state,
      lineitems: state.lineitems.filter(
        (lineitem) => lineitem.id !== action.lineitem.id
      ),
    };
  }
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      lineitems: [...state.lineItems, action.lineitem],
    };
  }
return state;
};

export default cart;