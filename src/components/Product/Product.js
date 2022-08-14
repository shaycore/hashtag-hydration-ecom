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
            <div>
                HELLO
            </div>
        );
    }
}

const mapState = ({ products }, ownProps) => {
    console.log(products);
    const id = ownProps.match.params.id;
    console.log(id);
    const product = products.find( product => product.id === id*1) || { name: ''};
    return {
        product
    };
};

const Product = connect(mapState)(_Product);

export default Product;