import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutAction } from '../../actions';


class Navbar extends React.Component{
    state ={
        path: null,
        location: window.location.pathname
    }

    componentDidMount(){
        this.setState({ path: window.location.pathname.split('/')[1] })
    }

    componentDidUpdate(){
        console.log(window.location.pathname.split('/')[1], this.state.locations )
        if(this.state.path !== window.location.pathname.split('/')[1]){
            console.log(window.location.pathname.split('/')[1])
            this.setState({ path: window.location.pathname.split('/')[1]})
        }
    }

    navClick = () => {
        this.setState({ path: window.location.pathname.split('/')[1] })
    }

    render(){
        return(
            <div className='navbar-container'>
                <ul className ={this.state.path} onClick={this.navClick}>
                    <Link to ='/accommodation' className='link'>
                    <li>Accommodation</li>
                    </Link>
                    <Link to ='/events' className='link'>
                    <li>Events</li>
                    </Link>
                    <Link to ='/pronites' className='link'>
                    <li>Pronites</li>
                    </Link>
                    <li><a href='https://drive.google.com/file/d/16KEZWjWFAd82XZfYt5dnP-tvN2ITEM-l/view' target='_blank' rel="noopener noreferrer">Brochure</a></li>
                    <Link to ='/sponsers' className='link'>
                    <li>Sponsers</li>
                    </Link>
                    <Link to ='/contactus' className='link'>
                    <li>Contact Us</li>
                    </Link>
                    
                    { this.props.authReducer && !this.props.authReducer.isLoggedIn && <Link to ='/login' className='link'><li className='highlight'>Login</li> </Link>}
                    {this.props.authReducer.isLoggedIn && <li className='highlight'>
                        <i className="fa fa-user"></i> 
                        {this.props.authReducer.loginData.firstName}
                        <button className='logout' onClick={() => {this.props.logoutAction()}}>Logout</button>
                    </li>}
                    
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authReducer: state.authReducer
    }
}

const connectProps = connect(mapStateToProps, { logoutAction })(Navbar);

export default connectProps;