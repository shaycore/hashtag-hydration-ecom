import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCart, exchangeToken, logout, fetchProducts, fetchWishlist } from '../store';
import { Switch, Link, Route, HashRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';
import Cart from './Pages/Cart';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Pages/Home';
import Products from './Product/Products';
import Product from './Product/Product';
import NotFound from './Pages/404';
import Account from './Account/Account';
import Admin from './Admin/Admin';
import AdminProducts from './Admin/AdminProducts';
import AdminProduct from './Admin/AdminProduct';
import AdminOrders from './Admin/AdminOrders';
import Users from './Admin/Users';
import User from './Admin/User';
import AddressBook from './Account/AddressBook';
import AboutUs from './Pages/AboutUs';
import Wishlist from './Wishlist';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
import StripeCheckOutForm from './Pages/StripeCheckOutForm'


class App extends React.Component{
  componentDidMount(){
    this.props.exchangeToken();
    this.props.fetchProducts();
  }
  componentDidUpdate(prevProps){
    if(!prevProps.auth.id && this.props.auth.id){
      this.props.fetchCart();
      this.props.fetchWishlist();
    }
  }

  
  render(){
    const { auth, logout, cart } = this.props;
    const options = {
      // passing the client secret obtained from the server
      clientSecret: '{{CLIENT_SECRET}}',
    };
    return (
      <div>
        {/* <Elements stripe={stripePromise} options={options}>
      <StripeCheckoutForm />
    </Elements> */}
      <Router>
        <div>
          <Route component={ Nav }/>
          <main id='main-container'>
          <div className='jumbotron'>
            <h1>HashTag Hydration</h1>
          </div>
            {
              auth.id ? <button onClick={ logout }>Logout { auth.username }</button>: null
            }
            {
              auth.id ? <Link to='/cart'>Cart ({cart.lineItems.length})</Link>: null
            }
            {/* {
              auth.id ? (
                <Fragment>
                  <Route path='/cart' component={ Cart } />
                </Fragment>
              ): null 
            }  */}
            

            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/account' component={ Account } />
              <Route exact path='/account/addressBook' component={ AddressBook } />
              <Route exact path='/products' component={ Products } />
              <Route exact path='/products/:id' component={ Product } />
              <Route exact path='/signin' component={ SignIn } />
              <Route exact path='/admin' component={ Admin } />
              <Route exact path='/admin/products' component={ AdminProducts } />
              <Route exact path='/admin/products/:id' component={ AdminProduct } />
              <Route exact path='/admin/orders' component={ AdminOrders } />
              <Route exact path='/admin/users' component={ Users } />
              <Route exact path='/admin/users/:id' component={ User } />
              <Route exact path='/about' component={ AboutUs } />
              <Route exact path='/wishlist' component={ Wishlist } />
              <Route exact path='/cart' component={ Cart } />
              <Route path="" component={NotFound} />
            </Switch>
              
            <Route component={ Footer }/>


          </main>
        </div>
      </Router>
      </div>
    );

  }
}
const mapDispatch = (dispatch)=> {
  return {
    exchangeToken: ()=> dispatch(exchangeToken()),
    logout: ()=> dispatch(logout()),
    fetchCart: ()=> dispatch(fetchCart()),
    fetchProducts: ()=>dispatch(fetchProducts()),
    fetchWishlist: () => dispatch(fetchWishlist())
  };
};
const mapStateToProps = (state)=> {
  return state;
};
export default connect(mapStateToProps, mapDispatch)(App);
