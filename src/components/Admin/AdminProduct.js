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
                <form onSubmit={ save }>
                    <div className="row px-xl-5">
                        <div className="col-lg-5 pb-5">
                            <img className="w-100 h-100" src={ image || '' } alt='Product Image' /><br />
                            Upload Image: <input type='file' ref={ el => this.el = el }/><br />
                        </div>
                        <div className="col-lg-7 pb-5">
                            Brand: <br />
                            <div className="d-flex mb-3 text-dark font-weight-medium">
                                <input className="form-control" placeholder='Brand' value={ brand || '' } onChange={ ev => this.setState({ brand: ev.target.value })}></input><br />
                            </div>
                            Name: <br />
                            <div className="d-flex mb-3 text-dark font-weight-medium">
                                <input className="form-control" placeholder='Name' value={ name || '' } onChange={ ev => this.setState({ name: ev.target.value })}></input><br />
                            </div>
                            Type: <br />
                            <div className="d-flex mb-3 text-dark font-weight-medium">
                                <input className="form-control" placeholder='Type' value={ type || '' } onChange={ ev => this.setState({ type: ev.target.value })}></input><br />
                            </div>
                            Description: <br />
                            <div className="d-flex mb-3 text-dark font-weight-medium">
                                <textarea className="form-control" placeholder='Description' value={ description || '' } onChange={ ev => this.setState({ description: ev.target.value })}></textarea><br />
                            </div>
                            Size: <br />
                            <div className="d-flex mb-3 text-dark font-weight-medium">
                                <input className="form-control" placeholder='Size' value={ size || '' } onChange={ ev => this.setState({ size: ev.target.value })}></input><br />
                            </div>
                            Color: <br />
                            <div className="d-flex mb-3 text-dark font-weight-medium">
                                <input className="form-control" placeholder='Color' value={ color || '' } onChange={ ev => this.setState({ color: ev.target.value })}></input><br />
                            </div>
                            Size: <br />
                            <div className="d-flex mb-3 text-dark font-weight-medium">
                                <input className="form-control" placeholder='Price' value={ price || '' } onChange={ ev => this.setState({ price: ev.target.value })}></input><br />
                            </div>
                            <div style={{display:"flex", gap:"10px"}}>
                                <button className="btn btn-primary px-3">Save Changes</button>
                                <button onClick={ destroy } className="btn btn-primary px-3">Delete Product</button>
                            </div>
                        </div>
                    </div>
                </form>
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