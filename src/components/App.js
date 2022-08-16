import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCart, exchangeToken, logout, fetchProducts } from '../store';
import { Switch, Link, Route, HashRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';
import Cart from './Pages/Cart';
import Nav from './Nav';
import Home from './Pages/Home';
import Products from './Product/Products';
import Product from './Product/Product';
import NotFound from './Pages/404';
import Account from './Account/Account';

class App extends React.Component{
  componentDidMount(){
    this.props.exchangeToken();
    this.props.fetchProducts();
  }
  componentDidUpdate(prevProps){
    if(!prevProps.auth.id && this.props.auth.id){
      this.props.fetchCart();
    }
  }
  render(){
    const { auth, logout, cart } = this.props;
    return (
      <Router>
        <div>
          <Route component={ Nav }/>
          <main id='main-container'>
            <h1>Grace Shopper</h1>
            {
              auth.id ? <button onClick={ logout }>Logout { auth.username }</button>: <SignIn />
            }
            {
              auth.id ? <Link to={`/users/${auth.id}`}>Account</Link>: null
            }
            {
              auth.id ? <Link to='/cart'>Cart ({cart.lineItems.length})</Link>: null
            }
            {
              auth.id ? (
                <Fragment>
                  <Route path='/cart' component={ Cart } />
                </Fragment>
              ): null 
            } 
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/users/:id' component={ Account } />
              <Route exact path='/products' component={ Products } />
              <Route exact path='/products/:id' component={ Product } />
              <Route path="" component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );

  }
}
const mapDispatch = (dispatch)=> {
  return {
    exchangeToken: ()=> dispatch(exchangeToken()),
    logout: ()=> dispatch(logout()),
    fetchCart: ()=> dispatch(fetchCart()),
    fetchProducts: ()=>dispatch(fetchProducts())
  };
};
const mapStateToProps = (state)=> {
  return state;
};
export default connect(mapStateToProps, mapDispatch)(App);
