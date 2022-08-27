import React, { Component } from 'react';
import { connect } from 'react-redux';
import { processOrder } from "../store";

class StripeSuccess extends Component {
  componentDidMount(){
    this.props.processOrder();
  }
  render() {
    return (
      <div>
        <div className='cart-container'>
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">Order Confirmation</h1>
                            <div className="d-inline-flex">
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Order Confirmation</p>
                            </div>
                        </div>
                    </div>  
          </div>
          <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">Thank you for your order!</span></h2>
        </div>
        <img src='https://i.etsystatic.com/11696695/r/il/e1101c/3909965980/il_1588xN.3909965980_31h9.jpg'
        width={'100%'}
        height={'600px'}/>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
      processOrder: () => dispatch(processOrder())
  };
}

export default connect((state) => state, mapDispatch)(StripeSuccess);