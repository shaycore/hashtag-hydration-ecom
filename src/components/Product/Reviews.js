import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReviews, fetchUsers } from "../../store";

class Review extends Component {
    constructor(){
        super();
        this.state = {
            productId: ''
        }
    }
    componentDidMount() {
        this.props.fetchReviews();
        this.props.fetchUsers();
    }
    componentDidUpdate(prevProps) {
        if(!prevProps.product.id && this.props.product.id) {
            this.setState({
                productId: this.props.product.id
            });
        }

    }
    render() {
        const { productId } = this.state;
        const { reviews, users } = this.props;
        const reviewsList = reviews.filter(review => review.productId === productId) || {};
    
        console.log(reviewsList);

        return (
            <div>
                <h1>Product Reviews</h1>
                {   
                    reviewsList.map( review => {
                        const user = users.find(user => user.id === review.userId) || '';
                        return (
                            <li key={review.id}>
                                { review.rating } - { review.review } - { user.fullName }
                            </li>
                        )
                    })
                }
                <br />
                {(reviewsList.length < 1) ? "No Reviews on this Product... Be the first to leave a review!":"Leave a Review!"}

            </div>
        );
    }
}

const mapDispatch = (dispatch, {history,match}) => {
    return {
        fetchReviews: ()=> dispatch(fetchReviews()),
        fetchUsers: ()=> dispatch(fetchUsers())
    }
};

const mapState = ({ products, reviews, users },{match}) => {
    return {
        products,
        reviews,
        users
    }
}

export default connect(mapState,mapDispatch)(Review);