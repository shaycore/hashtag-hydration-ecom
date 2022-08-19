import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFromCart, fetchCart, updateQuantity } from '../../store/cart';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.auth.id && this.props.auth.id) {
      this.props.fetchCart();
    }
  }

  onChange(ev) {
    const change = { [ev.target.name]: ev.target.value };
    this.setState(change);
    this.props.updateQuantity(change);
  }

  render() {
    const { cart } = this.props;
    const { onChange } = this;

    return (
      <main>
        <h1>Shopping Cart</h1>
        <ul>
          {cart.lineItems.map((lineItem) => {
            return (
              <li key={lineItem.id}>
                {lineItem.product.name} {lineItem.quantity}
                <input
                  type="number"
                  name={lineItem.product.name}
                  value={lineItem.quantity}
                  onChange={onChange}
                />
                <button onClick={() => this.props.deleteFromCart()}>X</button>
              </li>
            );
          })}
        </ul>
        <Link className="links" to="/checkout">
            Checkout
        </Link>
      </main>
    );
  }
}

const mapStateToProps = ({ cart, auth }) => {
  return {
    cart,
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    exchangeToken: () => dispatch(exchangeToken()),
    fetchCart: () => dispatch(fetchCart()),
    updateQuantity: (obj) => dispatch(updateQuantity(obj)),
    deleteFromCart: (item) => dispatch(deleteFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
