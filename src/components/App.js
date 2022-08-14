import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCart, exchangeToken, logout } from '../store';
import { Link, Route, HashRouter } from 'react-router-dom';
import SignIn from './SignIn';
import Cart from './Pages/Cart';
import Nav from './Nav';

class App extends React.Component{
  componentDidMount(){
    this.props.exchangeToken();
  }
  componentDidUpdate(prevProps){
    if(!prevProps.auth.id && this.props.auth.id){
      this.props.fetchCart();
    }
  }
  render(){
    const { auth, logout, cart } = this.props;
    return (
      <HashRouter>
        <div>
            <Route component={ Nav }/>
        </div>
      <main>
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
      </main>
      </HashRouter>
    );

  }
}
const mapDispatch = (dispatch)=> {
  return {
    exchangeToken: ()=> dispatch(exchangeToken()),
    logout: ()=> dispatch(logout()),
    fetchCart: ()=> dispatch(fetchCart())
  };
};
const mapStateToProps = (state)=> {
  return state;
};
export default connect(mapStateToProps, mapDispatch)(App);