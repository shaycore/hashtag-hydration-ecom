import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, fetchCart } from '../../store/cart';
import {PaymentElement} from '@stripe/react-stripe-js';

let cartTotal = 0
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
            console.log(product.price)
            console.log(lineItem.quantity)
           

              if (lineItem.quantity>0){

                cartTotal += product.price * lineItem.quantity
                cartTotal = Math.round((cartTotal + Number.EPSILON) * 100) / 100;

                return (
                  <li key={ product.id }>
                  {product.name}
                  <br></br>
                  Quantity: {lineItem.quantity}
                  <br></br>
                  ${product.price}
                  <br></br>
                    <button onClick={ ()=> addToCart(product)}>Add Quantity</button>
                    <button disabled={ lineItem.quantity === 0} onClick={ ()=> addToCart(product, -1)}>Delete Quantity</button>
                  <hr></hr>
                  </li>         
                )
          
              }
            }
          )
        }   
      </ul>
      <h4>Cart Total: ${cartTotal}</h4>
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
