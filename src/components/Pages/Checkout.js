import React, {useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import {fetchCart } from '../../store/cart';
import StripeCart from '../StripeCart';


const Checkout = ({ products, cart})=> {

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
    
    <div>

      <div className='cart-container'>
      <div className="container-fluid bg-secondary mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center" >
              <h1 className="font-weight-semi-bold text-uppercase mb-3">Check Out</h1>
              <div className="d-inline-flex">
                  <p className="m-0 px-2">-</p>
                  <p className="m-0">Check Out</p>
              </div>
          </div>
      </div> 
        <div className='card-header'>
          <h4>Checkout Order</h4>
        </div>
        <div>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th width='75%'>Products In Cart</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>

            {products.map( product => {
            const lineItem = cart.lineItems.find(lineItem => lineItem.productId === product.id) || { quantity: 0 };
              if (lineItem.quantity > 0){
                return (
                  <tr className='cart-product' key={ product.id }>
                    <td>{product.name}</td>
                    <td width='20px'>${product.price}</td>
                    <td>{lineItem.quantity}</td>
                    <td>${Math.round((Number(product.price) * lineItem.quantity+ Number.EPSILON) * 100) / 100}</td>
                  </tr>
                )
              }})}
              <tr>
                <td className='subtotal fw-bold' colSpan='2'>Grand Total</td>
                <td className='subtotal' colSpan='4'>${Math.round(cartTotal * 100) / 100}</td>
              </tr>
            </tbody>
          </table>
        </div>

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
              <span>Cancel and Keep Shopping</span>
            </Link>
          </div>

        <hr></hr>
        <div className='card-header'>
          <h4>Basic Info</h4>
        </div>
        <div></div>
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              <div className='form'>
                <label>First Name</label>
                <input type='text' name='firstName' className='form-control'/>
              </div>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              <div className='form'>
                <label>Last Name</label>
                <input type='text' name='lastName' className='form-control'/>
              </div>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              <div className='form'>
                <label>Email Address</label>
                <input type='text' name='email' className='form-control'/>
              </div>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              <div className='form'>
                <label>Street Address</label>
                <textarea rows='3' className='form-control'></textarea>
              </div>
            </div>
            <div className='col'>
              <div className='form'>
                <label>City</label>
                <input type='text' name='city' className='form-control'/>
              </div>
            </div>
            <div className='col'>
              <div className='form'>
                <label>State</label>
                <input type='text' name='state' className='form-control'/>
              </div>
            </div>
            <div className='col'>
              <div className='form'>
                <label>Zip Code</label>
                <input type='text' name='zipcode' className='form-control'/>
              </div>
            </div>
            <div className='cart-checkout button'>
              <StripeCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);