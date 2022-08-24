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

        return (
            <div className="col-md-6">
                <h4 className="mb-3">Reviews ({ reviewsList.length })</h4>
                {   
                    reviewsList.map( review => {
                        const user = users.find(user => user.id === review.userId) || '';
                        const filledStars = review.rating*1;
                        const emptyStars = 5 - review.rating*1;
                        let count = 0;
                        return (
                            <li className="media mb-4" key={review.id}>
                                <img className="img-fluid mr-3 mt-1" src={ user.avatar } style={{ width:"45px"}} />
                                <div className="media-body">
                                    <h6>{ user.fullName }</h6>
                                    <div className="text-primary mb-2">
                                        {
                                            [...Array(filledStars)].map((star) => {
                                                count++;
                                                return (
                                                    <span className="bi-star-fill" key={count}></span>
                                                )
                                            })
                                        }
                                        {
                                            [...Array(emptyStars)].map((star) => {
                                                count++;
                                                return (
                                                    <span className="bi-star" key={count}></span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p>
                                        { review.review }   
                                    </p>
                                </div>
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