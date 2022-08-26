import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, addToWishlist } from '../../store';
import Reviews from './Reviews';
import { ToastContainer, toast } from 'react-toastify';



class _Product extends Component {
    constructor(){
        super();
        this.state = {
            product: {},
            quantity: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addToWishlist = this.addToWishlist.bind(this);
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
        toast('Product added to cart!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.props.submit({...this.state});
        
    }
    addToWishlist() {
        const { product } = this.state;
        this.props.addToWishlist(product);
    }
    render(){
        const { product } = this.state;
        const { handleSubmit, changeQty, addToWishlist } = this;
        return (
            <div>
                <div className="container-fluid bg-secondary mb-5">
                    <Link to={'/products/'}>Return to All Products</Link>
                </div>
                <div className="container-fluid py-5" id='product-item'>
                    <div className="row px-xl-5">
                        <div className="col-lg-5 pb-5">
                            <img className="w-100 h-100" src={ product.image } alt='Product Image' />
                        </div>
                        <div className="col-lg-7 pb-5">
                            <h3 className="font-weight-semi-bold">{ product.name }</h3>
                            <h3 className="font-weight-semi-bold mb-4">${ product.price }</h3>
                            <p className="mb-4">
                                { product.description }
                            </p>
                            <div className="d-flex mb-3 text-dark font-weight-medium">
                                Size: { product.size }
                            </div>
                            <div className="d-flex mb-4 text-dark font-weight-medium">
                                Color: { product.color }
                            </div>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{width: '130px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-minus" onClick={()=>{ changeQty('decrement') }}>-</button>
                                    </div>
                                    <input className="form-control bg-secondary text-center" readOnly value={this.state.quantity} />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus" onClick={()=>{ changeQty('increment') }}>+</button>
                                    </div>
                                </div>
                                <button className="btn btn-primary px-3" type='submit' onClick={ handleSubmit }>
                                    <i className="bi-cart"> </i>
                                    Add to Cart
                                </button>
                                <ToastContainer
                                    position="top-left"
                                    autoClose={5000}
                                    hideProgressBar={true}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </div>
                            <div className="d-flex pt-2">
                                <button className="btn btn-primary px-3 bi-suit-heart-fill" style={{color: 'cornSilk'}} onClick={ addToWishlist }>
                                <i> Wishlist</i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid pt-5">
                        <div className="row px-xl-5 pb-3">
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                                    <h1 className="bi-asterisk text-primary m-0 mr-3"></h1>
                                    <h5 className="font-weight-semi-bold m-0">
                                        BPA Free
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                                    <h1 className="bi-stars text-primary m-0 mr-3"></h1>
                                    <h5 className="font-weight-semi-bold m-0">
                                        Stain Resistant
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                                    <h1 className="bi-droplet text-primary m-0 mr-3"></h1>
                                    <h5 className="font-weight-semi-bold m-0">
                                        Waterproof
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                                    <h1 className="bi-award text-primary m-0 mr-3"></h1>
                                    <h5 className="font-weight-semi-bold m-0">
                                        5 Year Warranty
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row px-xl-5">
                        <Reviews product={product}/>
                    </div>
                </div>
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
        },
        addToWishlist: (product) => {
            dispatch(addToWishlist(product))
        }
    };
};

const Product = connect(mapState,mapDispatch)(_Product);

export default Product;