import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51LZy6BESE3LZBw3Fhr3frR15agaT6lrOEc3HLwbNUB0Wq20hlXBWrtseBFocU5Tggu29cWUBvOlIhk7QeG2BvkBi00bOxgKfQD';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}

