import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EventRegisterForm from './eventRegisterForm';

class EventViewer extends React.Component {
    state={
         activeArr: [, 'active'],
         activeOption: 1
    }

    onOptionClick = option => {
        let arr = new Array(6);
        arr[option] = 'active'
        this.setState({activeArr: arr, activeOption: option})
    }

    renderArr = (eventDetails) => {
        return eventDetails.map((el) => {
            return(
                <li>
                    {el}
                </li>
            )
        })
    }

    renderContacts = (contacts) => {
        return contacts.map((el) => {
            return(
                <span className='contact-name'>{el.name} : <a href={`tel: +91 ${el.phone}`}>{el.phone}</a></span>
            )
        })
    }

    render(){
    return ReactDOM.createPortal(
        <div className='event-viewer' onClick={this.props.eventClose}>
            <div className='event-viewer--model' 
                onClick={(event) => { event.stopPropagation()}} 
                >
                    <div className='close-button' onClick={this.props.eventClose}>X</div>
                    <div className='event-viewer--model-heading'>
                        {this.props.eventName}
                    </div>
                    <div className='event-viewer--model-navbar'>
                        <span className={`event-viewer--model-navbar-option ${this.state.activeArr[1]}`} onClick={()=>{this.onOptionClick(1)}}>General</span>
                        <span className={`event-viewer--model-navbar-option ${this.state.activeArr[2]}`} onClick={()=>{this.onOptionClick(2)}}>Rules</span>
                        <span className={`event-viewer--model-navbar-option ${this.state.activeArr[3]}`} onClick={()=>{this.onOptionClick(3)}}>Results</span>
                        <span className={`event-viewer--model-navbar-option ${this.state.activeArr[4]}`} onClick={()=>{this.onOptionClick(4)}}>Contact Us</span>
                        <span className={`event-viewer--model-navbar-option ${this.state.activeArr[5]}`} onClick={()=>{this.onOptionClick(5)}}>Register</span>
                    </div>

                    <div className='event-viewer--model-content'>
                        {this.state.activeOption === 1 && <div>
                            <ul>
                                {this.renderArr(this.props.eventDetails)}
                            </ul>
                        </div>}
                        {this.state.activeOption === 2 && <div>
                            <ul>
                                {this.renderArr(this.props.eventRules)}
                            </ul>
                        </div>}
                        {this.state.activeOption === 3 && <div>
                        <span className='results'>{this.props.result? this.props.result : 'Result will be Updated after the match is over'}</span>
                        </div>}
                        {this.state.activeOption === 4 && <div>
                            <div className='event-viewer--model-contact'>
                                {this.renderContacts(this.props.contacts)}
                            </div>
                        </div>}
                        {this.state.activeOption === 5 && <div>
                            {this.props.authReducer && this.props.authReducer.isLoggedIn && <div className='event-viewer--model-form'>
                                 <EventRegisterForm eventType={this.props.eventType} eventName={this.props.eventName} />
                            </div>}
                            {this.props.authReducer && !this.props.authReducer.isLoggedIn && <div className='event-viewer--model-form login'>
                                <span>Please Login/Register your Account to Register for this Event</span>
                                <Link to='/login' className='link'><button className='button type1'>Login</button></Link>
                            </div>}
                        </div>}
                    </div>

            </div>

        </div>,
        document.querySelector('#model')
    )}
};

const mapStateToProps = (state) => {
    return{
        loginData: state.authReducer.loginData,
        authReducer: state.authReducer
    }
}

const connectProps = connect(mapStateToProps)(EventViewer);

export default connectProps;