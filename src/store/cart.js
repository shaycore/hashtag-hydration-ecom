import axios from 'axios';
import history from "history";
import users from "./users";

const DELETE_FROM_CART = "DELETE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";
const CHECK_OUT_ORDER = "CHECK_OUT_ORDER";

const _deleteFromCart = (lineitem) => ({
  type: DELETE_FROM_CART,
  lineitem,
});

const _addToCart = (lineitem) => ({
  type: ADD_TO_CART,
  lineitem,
});

const _checkOutOrder = (order) => ({
  type: CHECK_OUT_ORDER,
  order,
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

export const deleteFromCart = (lineitemId, quantity) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data } = await axios.delete(
          `/api/orders/cart/${lineitemId}/${quantity}`,
          { headers: { authorization: token } }
        );
        dispatch(_deleteFromCart(data));
      }
    } catch (ex) {
      console.log(ex);
    }
  };
};

export const addToCart = (product, quantity) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        console.log("product", product);
        const lineitem = {
          quantity,
          cost: product.price,
          productId: product.id,
        };
        const { data } = await axios.post("/api/orders/cart", lineitem, {
          headers: { authorization: token },
        });
        dispatch(_addToCart(data));
      } else {
        alert('Please Sign Up or Log In!')
      }
    } catch (ex) {
      console.log(ex);
    }
  };
};

export const createOrder = (id, history) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      const Month = new Date().getMonth() + 1;
      const Day = new Date().getDate();
      const Year = new Date().getFullYear();
      const newOrder = {
        time: `${Month}/${Day}/${Year}`,
        isCart: false,
      };
      console.log(newOrder);
      console.log(token);
      const { data } = (
        await axios.put(`/api/orders/${id}`, newOrder, {
          headers: {
            authorization: token,
          },
        })
      )
      console.log(data)
      dispatch(_checkOutOrder(data));
      history.push("/orders");
    } catch (e) {
      console.log({ e });
    }
  };
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
      lineitems: [...state.lineitems, action.lineitem],
    };
  }
  if (action.type === CHECK_OUT_ORDER) {
    return {lineitems: []};
  }
return state;
};

export default cart;
