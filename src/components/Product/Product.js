import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store';
import Reviews from './Reviews';

class _Product extends Component {
    constructor(){
        super();
        this.state = {
            product: {},
            quantity: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.setState({
            product: this.props.product
        })
    }
    componentDidUpdate(prevProps){
        if(!prevProps.product.id && this.props.product.id) {
            this.setState({
                product: this.props.product
            })
        }
    }
    changeQty = (type) => {
        if(type==='increment') {
            this.setState({quantity: this.state.quantity + 1})
        } else if (type==='decrement') {
            if (this.state.quantity > 1) {
                this.setState({quantity: this.state.quantity - 1})
            } 
        }
    }
    async handleSubmit(ev) {
        ev.preventDefault();
        this.props.submit({...this.state});
    }
    render(){
        const { product } = this.state;
        const { handleSubmit, changeQty } = this;
        return (
            <div id='product-item'>
                <Link to={'/products/'}>Return to All Products</Link>
                <br />
                <img src={ product.image } alt='Product Image' />
                <ul>
                    <li>{ product.name }</li>
                    <li>Type: { product.type }</li>
                    <li>Description: { product.description }</li>
                    <li>Price: ${ product.price }</li>
                    <li>Size: { product.size }</li>
                    <li>Color: { product.color }</li>
                    <li>Rating: { product.rating }</li>

                </ul>
                <button onClick={()=>{ changeQty('decrement') }}>-</button>
                <button onClick={()=>{ changeQty('increment') }}>+</button>

                Quantity: {this.state.quantity} 
                <br />
                <button type='submit' onClick={ handleSubmit }>Add to Cart</button>
                <button>Add to Wishlist</button>
                
                <Reviews product={product}/>
            </div>
        );
    }
}

const mapState = ({ products }, ownProps) => {
    const id = ownProps.match.params.id;
    const product = products.find( product => product.id === id*1) || {};
    return {
        product
    };
};

const mapDispatch = (dispatch, { history, match }) => {
    return {
        submit: (obj) => {
            console.log("I'm sending: " + obj.product.name, obj.quantity);
            dispatch(addToCart(obj.product,obj.quantity));
        }
    };
};

const Product = connect(mapState,mapDispatch)(_Product);

export default Product;