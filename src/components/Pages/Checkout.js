import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'

const Checkout = () => {
  return (
    <div>
      <div className='cart-container'>
      <h2>Checkout</h2>
        <div className='card-header'>
          <h4>Basic Information</h4>
        </div>
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
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  

export default Checkout