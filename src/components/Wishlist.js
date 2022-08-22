import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWishlists, fetchWishlistProducts } from "../store";

class WishList extends Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        const { wishlists, wishlistProducts, auth, products } = this.props;
        const authWishlist = wishlists.find( wishlist => wishlist.userId === auth.id );
        const authWishlistProducts = wishlistProducts.filter(wishlistProduct => wishlistProduct.wishlistId === authWishlist.id);
        return (
            <div>
                <h1>Wishlist</h1>
                <ul>
                    {
                        authWishlistProducts.map(authWishlistProduct => {
                            const product = products.find(product => product.id === authWishlistProduct.productId)
                            return (
                                <li key={ authWishlistProduct.id }>
                                    {product.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

const mapState = (state) => {
    return state;
};

const mapDispatch = (dispatch) => {
    return {
        loadData: async() => {
            await dispatch(fetchWishlists()),
            await dispatch(fetchWishlistProducts())
        }
    }
}

export default connect(mapState, mapDispatch)(WishList);