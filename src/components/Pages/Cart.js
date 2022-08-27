import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, fetchCart, clearCart } from '../../store/cart';
import { Link } from 'react-router-dom'

const Cart = connect(
  state => state,
  dispatch => {
    return {
      addToCart: (product, diff = 1)=> dispatch(addToCart(product, diff)),
      clearCart:() => dispatch(clearCart()),
    };
  }
  
)
(({ products, cart, addToCart, clearCart })=> {

  let cartTotal = 0;

  cart.lineItems.forEach(lineItem => {
    let quantity = lineItem.quantity;
    let price = lineItem.product.price;
    if(quantity && price) {
      let lineItemCost =  price*quantity;
      cartTotal = lineItemCost + cartTotal;
    }
  });

  return (
    <div className='cart-container'>
      <div className="container-fluid bg-secondary mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center" >
              <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
              <div className="d-inline-flex">
                  <p className="m-0 px-2">-</p>
                  <p className="m-0">Shopping Cart</p>
              </div>
          </div>
      </div>      
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
        
        <ul style={{ listStyleType: "none" }}>
        {
          products.map( product => {
            const lineItem = cart.lineItems.find(lineItem => lineItem.productId === product.id) || { quantity: 0 };

              if (lineItem.quantity > 0){
                return (
                  <li className='cart-product' key={ product.id }>
                  <img src={product.image} 
                    height={200}
                    width={200}
                  />
                  <h3>{product.name}</h3>
                  {/* <p>{product.description}</p> */}
                  Quantity: {lineItem.quantity}
                  <br></br>
                  ${product.price}
                    <button onClick={ ()=> addToCart(product)}>Add Quantity</button>
                    <button disabled={ lineItem.quantity === 0} onClick={ ()=> addToCart(product, -1)}>Delete Quantity</button>
                  <div className='cart-product-total-price'>
                    Product Total: ${Math.round((Number(product.price) * lineItem.quantity+ Number.EPSILON) * 100) / 100}
                  </div>
                  <hr></hr>
                  </li>
                )
          
              }
            }
          )
        }   
      </ul>
      </div>
      )}
      <div className='cart-summary'>
        <button className='clear-cart' onClick={ () =>clearCart()}>Clear Cart</button>
        <div className='cart-checkout'>
          <div className='subtotal'>
            <span>Subtotal </span>
            <span className='amount'>
              ${Math.round(cartTotal * 100) / 100}
            </span>
          </div>
          <p>Shipping: Your order qualifies for free shipping!</p>
          <p>Taxes: $ {(Math.round((cartTotal * 100) * 0.04) / 100)} Applied at checkout</p>
          <button className="cart-checkout button">
              <Link to="/checkout">Checkout</Link>
          </button>
          <div className='cart-empty'>
          <div className='continue-shopping'>
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
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
        </div>
      </div>
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
