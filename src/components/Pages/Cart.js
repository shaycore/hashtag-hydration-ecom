import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, fetchCart } from '../../store/cart';
import { Link } from 'react-router-dom'

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
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      
      { cart.lineItems.length === 0 ? (
        <div className='cart-empty'>
          <p>Your cart is currently empty.</p>
          <div className='start-shopping'>
            <Link to='/products'>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor" 
              className="bi bi-arrow-left" 
              viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
      <div>
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
      </div>)}
      </div>
  );
}
)
      
      

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
