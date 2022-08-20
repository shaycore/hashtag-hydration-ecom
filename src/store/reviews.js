import axios from 'axios';

const reviews = (state = [], action)=> {
  if (action.type === 'SET_REVIEWS') {
    return action.reviews;
  }
  return state;
};

export const fetchReviews = ()=> {
  return async(dispatch) => {
    const reviews = (await axios.get('/api/reviews')).data;
    dispatch({ type: 'SET_REVIEWS', reviews });
  };
};  

export default reviews;