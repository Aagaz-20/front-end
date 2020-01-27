import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from 'react-notifications-component';

//video
import teaserVideo from '../../images/teaser-video.mp4';

class Main extends React.Component{

    notification = () => {
        store.addNotification({
            title:  'Conflict',
            message:  "You are already Logged In",
            type: "warning",
            insert: "bottom",
            width: 300,
            container: "bottom-left",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
            duration: 4000,
            onScreen: true
            }
        });
    }

    render(){
        return(
            <div className='section-main'>
                <video autoPlay='autoplay' muted loop className='teaser-video'>
                <source src={teaserVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
                </video>
                <div className='section-main--wrapper'>
                    <div className='section-main--wrapper-title'>
                    <svg viewBox="0 0 600 300">
                        <symbol id="s-text">
                            <text className='section-main--wrapper-title-primary' textAnchor="middle" x="50%" y="50%" dy=".35em">
                            AAGAZ 
                            </text>
                            <text className='section-main--wrapper-title-secondary' textAnchor="middle" x="75%" y="70%" dy=".35em">
                            2020
                            </text>
                        </symbol>
                        <use className="text" xlinkHref="#s-text"></use>
                        <use className="text" xlinkHref="#s-text"></use>
                        <use className="text" xlinkHref="#s-text"></use>
                        <use className="text" xlinkHref="#s-text"></use>
                        <use className="text" xlinkHref="#s-text"></use>
                    </svg>
                    </div>
                    {this.props.authReducer && !this.props.authReducer.isLoggedIn && <Link to='/registration' className='link'>
                        <button className='button type1'>Register</button>
                    </Link>}
                    {this.props.authReducer && this.props.authReducer.isLoggedIn && <button className='button type1' onClick={this.notification}>Register</button>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authReducer: state.authReducer
    }
}

const connectProps = connect(mapStateToProps)(Main);

export default connectProps;