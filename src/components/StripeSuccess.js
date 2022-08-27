import axios from "axios";
import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";
import { processOrder } from "../store";

class StripeSuccess extends Component {
  componentDidMount(){
    this.props.processOrder();
  }
  render() {
    const { cart } = this.props
    return (
      <div>
        <h1>Success! Thanks for your order, you'll be hydrated soon!</h1>
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