import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, logout } from '../../store/auth';
import { Link, Route, HashRouter as Router } from 'react-router-dom';


class Account extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            avatar: ''
        }
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        this.setState({
            firstName: this.props.auth.firstName,
            lastName: this.props.auth.lastName,
            email: this.props.auth.email,
            avatar: this.props.auth.avatar
        })
        this.el.addEventListener('change', ev => {
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.setState({ avatar: reader.result });
            })
            reader.readAsDataURL(file);
        })
    }
    componentDidUpdate(prevProps) {
        if(!prevProps.auth.id && this.props.auth.id) {
            this.setState({
                firstName: this.props.auth.firstName,
                lastName: this.props.auth.lastName,
                email: this.props.auth.email,
                avatar: this.props.auth.avatar
            })
        }
    }
    save(ev) {
        ev.preventDefault();
        const user = {
            id: this.props.auth.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            avatar: this.state.avatar
        }
        this.props.update(user);
    }
    render() {
        const { firstName, lastName, email, avatar } = this.state;
        const { save } = this;
        const { logout } = this.props;
        return (
            <div>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">Account Info</h1>
                    <div className="d-inline-flex">
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Account Info</p>
                    </div>
                </div>
            </div> 
                <div className="text-center mb-4">
                <div className='form-group'>
                <form onSubmit={ save }>
                    <h2 class="section-title px-5"><span class="px-2">Update and View Profile</span></h2>
                    <div>
                        <p>Profile Picture</p>
                    </div>
                    <div>
                    { avatar && <img src={ avatar } style={{ height: 300, width: 300 }} /> }<br />
                    <input type='file' ref={ el => this.el = el }/>
                    </div>
                    <p>First Name</p>
                    <input value={ firstName || '' } onChange={ ev => this.setState({ firstName: ev.target.value })}></input>
                    <p>Last Name</p>
                    <input value={ lastName || ''} onChange={ ev => this.setState({ lastName: ev.target.value })}></input>
                    <p>Email Address</p>
                    <input value={ email || ''} onChange={ ev => this.setState({ email: ev.target.value })}></input><br />
                    <br></br>
                        <button className="btn btn-primary px-3">Save Changes</button>
                </form>
                </div>
                <div className='font-weight-semi-bold mb-3'>
                <h2 class="section-title px-5"><span class="px-2">Address History</span></h2>
                <div>
                    <Link to='/account/addressbook'>Update Address</Link>
                </div>
                </div>
                <div className='font-weight-semi-bold mb-3'>
                <h2 class="section-title px-5"><span class="px-2">Review Past Orders</span></h2>
                <div>
                    <Link to={'/account/orderhistory'}>Order History</Link>
                </div>
                </div>
                <button className="btn btn-primary px-3" onClick={ logout }>Logout</button>
            </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        update: (user) => dispatch(updateUser(user)),
        logout: ()=> dispatch(logout(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);