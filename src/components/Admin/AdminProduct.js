import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../store';
// import {  } from '../../store';

class _AdminProduct extends Component {
    constructor(){
        super();
        this.state = {
            product: {},
            quantity: 1
        };
        this.destroy = this.destroy.bind(this);
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
    destroy(ev) {
        this.props.destroy(this.props.product)
    }
    render(){
        const { product } = this.state;
        const { destroy } = this;
        return (
            <div id='product'>
                <Link to={'/admin/products/'}>Return to All Products</Link>
                <br />
                <img src={ product.image } alt='Product Image' />
                <ul>
                    <li>Brand: { product.brand }</li>
                    <li>Name: { product.name }</li>
                    <li>Type: { product.type }</li>
                    <li>Description: { product.description }</li>
                    <li>Price: ${ product.price }</li>
                    <li>Size: { product.size }</li>
                    <li>Color: { product.color }</li>
                    <li>Rating: { product.rating }</li>

                </ul>
                <button onClick={ destroy }>Delete</button>
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
            dispatch(addToCart(obj.product,obj.quantity));
        },
        destroy: (product) => {
            dispatch(deleteProduct(product, history))
        }
    };
};

const AdminProduct = connect(mapState,mapDispatch)(_AdminProduct);

export default AdminProduct;