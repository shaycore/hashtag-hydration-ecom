import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, fetchCart } from '../../store/cart';
import {PaymentElement} from '@stripe/react-stripe-js';



const Cart = connect(
  state => state,
  dispatch => {
    return {
      addToCart: (product, diff = 1)=> dispatch(addToCart(product, diff))
    };
  }
)(({ products, cart, addToCart })=> {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* <form>
        <PaymentElement />
        <button>Submit</button>
      </form> */}
      <ul>
        {
          products.map( product => {
            const lineItem = cart.lineItems.find(lineItem => lineItem.productId === product.id) || { quantity: 0 };
              if (lineItem.quantity>0){
                return (
                  <li key={ product.id }>
                  {product.name} {lineItem.quantity}
                    <button onClick={ ()=> addToCart(product)}>+</button>
                    <button disabled={ lineItem.quantity === 0} onClick={ ()=> addToCart(product, -1)}>-</button>
                  </li>         
                )
              }
            }
          )
        }   
      </ul>
    </div>
  );
});

const mapStateToProps = (state)=> {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    exchangeToken: () => dispatch(exchangeToken()),
    fetchCart: () => dispatch(fetchCart()),
    fetchProducts: ()=> dispatch(fetchProducts()),
    dispatchAction: (action)=> dispatch(action)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
