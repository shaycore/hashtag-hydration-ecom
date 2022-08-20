import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProduct, deleteProduct } from '../../store';

class _AdminProduct extends Component {
    constructor(){
        super();
        this.state = {
            image: '',
            brand: '',
            name: '',
            type: '',
            description: '',
            size: '',
            color: '',
            price: ''
        };
        this.save = this.save.bind(this);
        this.destroy = this.destroy.bind(this);
    }
    componentDidMount(){
        this.setState({
            image: this.props.product.image,
            brand: this.props.product.brand,
            name: this.props.product.name,
            type: this.props.product.type,
            description: this.props.product.description,
            size: this.props.product.size,
            color: this.props.product.color,
            price: this.props.product.price
        });
        this.el.addEventListener('change', ev => {
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.setState({ image: reader.result });
            })
            reader.readAsDataURL(file);
        })
    }
    componentDidUpdate(prevProps){
        if(!prevProps.product.id && this.props.product.id) {
            this.setState({
                image: this.props.product.image,
                brand: this.props.product.brand,
                name: this.props.product.name,
                type: this.props.product.type,
                description: this.props.product.description,
                size: this.props.product.size,
                color: this.props.product.color,
                price: this.props.product.price
            })
        }
    }
    save(ev) {
        ev.preventDefault();
        const product = {
            id: this.props.product.id,
            image: this.state.image,
            brand: this.state.brand,
            name: this.state.name,
            type: this.state.type,
            description: this.state.description,
            size: this.state.size,
            color: this.state.color,
            price: this.state.price
        };
        this.props.update(product);
    }
    destroy(ev) {
        this.props.destroy(this.props.product)
    }
    render(){
        const { image, brand, name, type, description, size, color, price } = this.state;
        const { save, destroy } = this;
        return (
            <div id='product'>
                <Link to={'/admin/products/'}>Return to All Products</Link>
                <br />
                <form onSubmit={ save }>
                    <img src={ image || '' } alt='Product Image' /><br />
                    <input type='file' ref={ el => this.el = el }/><br />
                    <p>Brand</p>
                    <input placeholder='Brand' value={ brand || '' } onChange={ ev => this.setState({ brand: ev.target.value })}></input><br />
                    <p>Name</p>
                    <input placeholder='Name' value={ name || '' } onChange={ ev => this.setState({ name: ev.target.value })}></input><br />
                    <p>Type</p>
                    <input placeholder='Type' value={ type || '' } onChange={ ev => this.setState({ type: ev.target.value })}></input><br />
                    <p>Description</p>
                    <textarea placeholder='Description' value={ description || '' } onChange={ ev => this.setState({ description: ev.target.value })}></textarea><br />
                    <p>Size</p>
                    <input placeholder='Size' value={ size || '' } onChange={ ev => this.setState({ size: ev.target.value })}></input><br />
                    <p>Color</p>
                    <input placeholder='Color' value={ color || '' } onChange={ ev => this.setState({ color: ev.target.value })}></input><br />
                    <p>Price</p>
                    <input placeholder='Price' value={ price || '' } onChange={ ev => this.setState({ price: ev.target.value })}></input><br />
                    <button>Save Changes</button>
                </form>
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

const mapDispatch = (dispatch, { history }) => {
    return {
        update: (product) => {
            dispatch(updateProduct(product))
        },
        destroy: (product) => {
            dispatch(deleteProduct(product, history))
        }
    };
};

const AdminProduct = connect(mapState,mapDispatch)(_AdminProduct);

export default AdminProduct;