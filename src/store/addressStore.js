import axios from 'axios';

const addressStore = (state = [], action)=> {
  if (action.type === 'SET_ADDRESSES') {
    return action.addresses;
  }
  if (action.type === 'CREATE_ADDRESS') {
    return [...state, action.address];
  }
  if (action.type === 'DELETE_ADDRESS') {
    return state.filter(address => address.id !== action.address.id);
  }
  if (action.type === 'UPDATE_ADDRESS') {
    return state.map((address) => address.id === action.address.id ? action.address: address);
  }
  return state;
};

export const fetchAddresses = ()=> {
  return async(dispatch) => {
    const addresses = (await axios.get('/api/addresses')).data;
    console.log(addresses);
    dispatch({ type: 'SET_ADDRESSES', addresses });
  };
};  

export const createAddress = (address) => {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token) {
      address = (await axios.post('/api/addresses', address, {
        headers: {
          authorization: token
        }
      })).data;
      dispatch({ type: 'CREATE_ADDRESS', address })
    }
  };
};

export const deleteAddress = (address) => {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token) {
      await axios.delete(`/api/addresses/${ address.id }`, {
        headers: {
          authorization: token
        }
      });
      dispatch({ type: 'DELETE_ADDRESS', address});
      history.push('/api/addresses')
    }
  }
}

export const updateAddress = (address) => {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token) {
      address = (await axios.put(`/api/addresses/${ address.id }`, address, {
        headers: {
          authorization: token
        }
      })).data;
      dispatch({ type: 'UPDATE_ADDRESS', address })
    }
  }
}

export default addressStore;
