import axios from 'axios';

const lineitems = (state = [], action)=> {
  if (action.type === 'SET_LINEITEMS') {
    return action.lineitems || state;
  }
  return state;
};

export const fetchLineItems = (id)=> {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    if(token) {
        let lineitems = (await axios.get(`/api/lineitems/order/${id}`, {
            headers: {
                authorization: token
            }
        })).data;
        dispatch({ type: 'SET_LINEITEMS', lineitems });
    };
  };
};  

export default lineitems;