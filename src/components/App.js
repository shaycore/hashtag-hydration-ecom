import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCart, exchangeToken, logout, fetchProducts } from '../store';
import { Link, Route, HashRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';
import Cart from './Pages/Cart';
import Nav from './Nav';
import Home from './Pages/Home';
import Products from './Product/Products';

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
              auth.id ? <Link to='/cart'>Cart ({cart.lineItems.length})</Link>: null
            }
            {
              auth.id ? (
                <Fragment>
                  <Route path='/cart' component={ Cart } />
                </Fragment>
              ): null 
            } 
            <Route exact path='/' component={ Home } />
            <Route exact path='/products' component={ Products } />

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
