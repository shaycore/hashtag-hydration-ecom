import axios from 'axios';

const products = (state = [], action)=> {
  if (action.type === 'SET_PRODUCTS') {
    return action.products;
  }
  if (action.type === 'CREATE_PRODUCT') {
    return [...state, action.product];
  }
  if (action.type === 'DELETE_PRODUCT') {
    return state.filter(product => product.id !== action.product.id);
  }
  if (action.type === 'UPDATE_PRODUCT') {
    return state.map((product) => product.id === action.product.id ? action.product: product);
  }
  return state;
};

export const fetchProducts = ()=> {
  return async(dispatch) => {
    const products = (await axios.get('/api/products')).data;
    dispatch({ type: 'SET_PRODUCTS', products });
  };
};  

export const createProduct = (product) => {
  return async(dispatch) => {
    product = (await axios.post('/api/products', product)).data;
  };
};

export const deleteProduct = (product) => {
  return async(dispatch) => {
      await axios.delete(`/api/products/${ product.id }`);
      dispatch({ type: 'DELETE_PRODUCT', product});
  }
}

export const updateProduct = (product) => {
  return async(dispatch) => {
      campus = (await axios.put(`/api/products/${ product.id }`, product )).data;
      dispatch({ type: 'UPDATE_PRODUCT', campus })
  }
}

export default products;
