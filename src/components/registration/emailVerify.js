import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailVerifyAction } from '../../actions';

class EmailVerify extends React.Component{
    state={
        popup: false
    }

    componentDidMount(){
        this.props.emailVerifyAction(this.props.match.params.token)
    }

    onPaymentClick = () => {
        if(!this.state.popup){
            this.setState({popup: true})
        }else{
            this.setState({popup: false})
        }
    }
    render(){
        return(
             <div className='page-email-verify'>
                {this.props.authReducer && this.props.authReducer.isEmailVerified && <div> <span className='page-email-verify--heading'>Success</span>
                <div className='page-content'>
                    <span className='page-content--verified'>Congratulation ! Your Email Address ihas been verified Successfully.<br />Now You can login into your Account</span>
                    <Link to='/login' className='link'><button className='button type1'>Login</button></Link>
                    
                </div></div>}
                {this.props.error && this.props.error.error && <div> <span className='page-email-verify--heading'>{this.props.error.error.title}</span>
                    <div className='page-content'>
                    <span className='page-content--verified'>{this.props.error.error.msg}</span>
                    
                </div></div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authReducer : state.eventRegistration,
        error: state.errors
    }
}

const connectProps = connect(mapStateToProps,{ emailVerifyAction})(EmailVerify);

export default connectProps;