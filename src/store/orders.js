import axios from 'axios';

const orders = (state = [], action)=> {
  if (action.type === 'SET_ORDERS') {
    return action.orders || state;
  }
  return state;
};

export const fetchOrders = ()=> {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token) {
        let orders = (await axios.get('/api/orders', {
            headers: {
                authorization: token
            }
        })).data;
        dispatch({ type: 'SET_ORDERS', orders });
    };
  };
};  

export default orders;