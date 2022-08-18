import axios from 'axios';
//TODO double check routes

const addressReducer = (state = [], action)=> {
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

//Does it make sense to write some logic below to grab all the addresses (for admin) 
//or just address with a specific userId if that userID is passed in?
export const fetchAddresses = ()=> {
  return async(dispatch) => {
    const addresses = (await axios.get('/api/addresses')).data;
    dispatch({ type: 'SET_ADDRESSES', addresses });
  };
};  

export const createAddress = (address) => {
  return async(dispatch) => {
    address = (await axios.post('/api/addresses', address)).data;
    dispatch({ type: 'CREATE_ADDRESS', address});
  };
};

export const deleteAddress = (address) => {
  return async(dispatch) => {
      await axios.delete(`/api/addresses/${ address.id }`);
      dispatch({ type: 'DELETE_ADDRESS', address});
  }
}

export const updateAddress = (address) => {
  return async(dispatch) => {
      address = (await axios.put(`/api/addresses/${ address.id }`, address )).data;
      dispatch({ type: 'UPDATE_ADDRESS', address })
  }
}

export default addressReducer;
