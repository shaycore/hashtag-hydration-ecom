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
      <h2>Checkout</h2>
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
                <td className='subtotal' colSpan='4'>${(Math.round((cartTotal * 0.04+ (cartTotal))))}</td>
              </tr>
            </tbody>
          </table>
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
                <label>Full Address</label>
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