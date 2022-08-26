import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { addToCart, addToWishlist } from "../store";

class WishList extends React.Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
      }
    onClick(product) {
        this.props.addToCart(product);
        this.props.deleteFromWishlist(product);
    }
    render() {
        const { wishlist } = this.props;
        const { wishlistProducts } = wishlist;
        const { onClick } = this;
        return (
            <div className='cart-container'>
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">Wish List</h1>
                            <div className="d-inline-flex">
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Wish List</p>
                            </div>
                        </div>
                    </div>   
                {
                    !wishlistProducts.length ? (
                        <div className='cart-empty'>
                            <p>no wishlist</p>
                            <div className='start-shopping'>
                                <Link to='/products'>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor" 
                                    className="bi bi-arrow-left" 
                                    viewBox="0 0 16 16">
                                        <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                    <span>Start Shopping</span>
                                </Link>
                            </div>
                        </div>
                    ) : (
                    <ul style={{ listStyleType: "none" }}>
                        {
                            wishlistProducts.map(wishlistProduct => {
                                const { product } = wishlistProduct
                                return (
                                    <li className='cart-product' key={ wishlistProduct.id }>
                                        <img src={product.image} 
                                            height={200}
                                            width={200}
                                        />
                                        <h3>{product.name}</h3>
                                        {/* <p>{product.description}</p> */}
                                        <br></br>
                                        ${product.price}
                                        <button onClick={ () => onClick(product) }>Move To Cart</button>
                                        <hr></hr>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    )
                }
            </div>
        )
    }

}

const mapState =(state) => state;

const mapDispatch = (dispatch) => {
    return {
        addToCart: (product, diff = 1) => dispatch(addToCart(product, diff)),
        deleteFromWishlist: (product) => dispatch(addToWishlist(product))
    };
}
export default connect(mapState, mapDispatch)(WishList);