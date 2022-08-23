import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { connect } from 'react-redux'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = ({ cart }) => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
  
    let cartTotal = 0;
  
    cart.lineItems.forEach((lineItem) => {
      let quantity = lineItem.quantity;
      let price = lineItem.product.price;
      if (quantity && price) {
        let lineItemCost = price * quantity;
        cartTotal = lineItemCost + cartTotal;
      }
    });
  
    const handleSubmit = async (evt) => {
      evt.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (!error) {
        try {
          const { id } = paymentMethod;
          const response = await axios.post('/api/orders/order-payment', {
            amount: (cartTotal * 0.04 + cartTotal) * 100,
            id
          });
  
          if (response.data.success) {
            console.log('Successful payment');
            setSuccess(true);
          }
        } catch (error) {
          console.log('Error', error);
        }
      }
      else {
        console.log(error.message);
      }
    };
  
    return (
      <>
        {!success ? (
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup"></fieldset>
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
            <fieldset>
              <button>Pay</button>
            </fieldset>
          </form>
        ) : (
          <div>
            <h2>Thank you for the order! Have an amazing day!</h2>
          </div>
        )}
      </>
    );
  };
  
  const mapStateToProps = ({ cart }) => {
    return {
      cart
    };
  };
  
  export default connect(mapStateToProps, null)(PaymentForm);