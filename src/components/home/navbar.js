import React from 'react';
import { Link } from 'react-router-dom';


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
                    <Link to ='/brochure' className='link'>
                    <li>Brochure</li>
                    </Link>
                    <Link to ='/sponsers' className='link'>
                    <li>Sponsers</li>
                    </Link>
                    <Link to ='/contactus' className='link'>
                    <li>Contact Us</li>
                    </Link>
                    <Link to ='/login' className='link'>
                    <li className='highlight'>Login</li>
                    </Link>
                    
                </ul>
            </div>
        )
    }
}

export default Navbar;