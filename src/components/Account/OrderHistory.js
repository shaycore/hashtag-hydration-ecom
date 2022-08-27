import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders, fetchUsers } from "../../store";


class AdminOrders extends React.Component{
    componentDidMount(){
        this.props.fetchOrders();
        this.props.fetchUsers();
    }
    componentDidUpdate(prevProps){

    }
    render(){
        const { orders, auth } = this.props;
        const userOrders = orders.filter(order => order.userId === auth.id);
        return (
            <div>
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">
                            List of Orders ({userOrders.length})
                        </h1>
                        <div className="d-inline-flex">
                            <p className="m-0">
                                <Link to={'/account/'}>Return to Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="row px-xl-5 justify-content-center">
                        <div className="col-lg-8 table-responsive mb-5">
                            <table className="table table-bordered text-center mb-0">
                                <thead className="bg-secondary text-dark">
                                    <tr>
                                        <th>Order Number</th>
                                        <th>Date Placed</th>
                                        <th>Order Information</th>

                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    {
                                        userOrders.map( order => {
                                            var newDate = new Date(order.createdAt).toDateString().toString();
                                            return (
                                                <tr key={ order.id }>
                                                    <td className="align-middle">
                                                        Order #{ order.id }
                                                    </td>
                                                    <td className="align-middle">
                                                        { newDate }
                                                    </td>
                                                    <td className="align-middle">
                                                        <Link to={`/account/orderhistory/${order.id}`}>View More</Link> <br />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
const mapDispatch = (dispatch)=> {
    return {
        fetchOrders: ()=> dispatch(fetchOrders()),
        fetchUsers: ()=> dispatch(fetchUsers())
    };
};
const mapStateToProps = (state)=> {
    return state;
};

export default connect(mapStateToProps, mapDispatch)(AdminOrders);
  