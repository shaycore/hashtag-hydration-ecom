import axios from 'axios';

const products = (state = [], action)=> {
  if(action.type === 'SET_PRODUCTS'){
    return action.products;
  }
  return state;
};

export const fetchProducts = ()=> {
  return async(dispatch) => {
    const products = (await axios.get('/api/products')).data;
    console.log(products);
    dispatch({ type: 'SET_PRODUCTS', products });
  };
};  

export default products;
