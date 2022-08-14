import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class _Product extends Component {
    constructor(){
        super();
        this.state = {
        };
    }
    componentDidMount(){
    }
    componentDidUpdate(prevProps){
    }
    render(){
        const { product } = this.props;
        console.log(product);
        return (
            <div id='product'>
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
            </div>
        );
    }
}

const mapState = ({ products }, ownProps) => {
    const id = ownProps.match.params.id;
    const product = products.find( product => product.id === id*1) || { name: ''};
    return {
        product
    };
};

const Product = connect(mapState)(_Product);

export default Product;