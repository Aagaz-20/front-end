import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../utils/validation';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { store } from 'react-notifications-component';

//actions
import { forgotPasswordAction, resetPasswordAction } from '../../actions';

//images
import shapeImage from '../../images/green-yellow-shape.png';

class ResetPassword extends React.Component{
    state = {
        form: 1,
        error: false,
        loading: false,
        otp: false
    }

    componentDidUpdate(){
        const { errors } = this.props;
        
        if( errors.error && this.state.error && !this.state.loading ){
            console.log(errors)
            store.addNotification({
                title:  errors.error.title,
                message:  errors.error.msg,
                type: "danger",
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
            this.setState({ error: false});
        }

        if( this.state.otp && !this.state.loading ){
            // console.log(errors)
            store.addNotification({
                title:  'OTP Sent',
                message:  'Please cheack your email inbox for OTP',
                type: "success",
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
            this.setState({ otp: false});
        }
        
    }

    renderField = ({ input, label, type, input: { value }, meta: {pristine, valid, dirty, active, touched, error } }) => (
        <div className='input-field'>
            
          <div title={type !== 'password' ? value : null}>
            <input 
                className={ value || dirty || active ? (valid ? 'input-field--value touched' : 'input-field--value error') : 'input-field--value'}
                {...input} 
                type={type}
                
            />
            {touched && error && <span className='input-field--value-error'>{error}</span>}
          </div>
          <label className={ value || dirty || active ? 'input-field--label touched' : 'input-field--label'}>
                {label}
            </label>
        </div>
    );

    onFormOneSubmit = async (formValues) => {
        // console.log(formValues);
        this.setState({ loading: true, otp: true})
        const response = await this.props.forgotPasswordAction(formValues);
        // this.setState({ form: 2})
        if(response){
            this.setState({loading: false, form: 2})
        }
    }
    onFormTwoSubmit = async (formValues) => {
        // console.log(formValues);
        this.setState({loading: true, error: true})
        const response  = await this.props.resetPasswordAction(formValues);
        if(response){
            this.setState({loading: false})
        }
    }
    // onFormThreeSubmit = (formValues) => {
    //     console.log(formValues);
    // }


    render(){
        if(this.props.resetPasswordData){
            store.addNotification({
                title:  'Success',
                message:  'Password Successfully changed. Please Login with your new Password',
                type: "success",
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
            return <Redirect to='/login' />
        }
        return(
            <div className='page-wrapper reset-password'>
                <div className='form-wrapper'>
                    <img src={shapeImage} alt='bubble' />
                    <div className='form-container'>
                        <span className='form-title'>Reset Password</span>
                        {this.state.form === 1 && <form onSubmit={this.props.handleSubmit(this.onFormOneSubmit)}>
                            <Field name='email' type='email' component={this.renderField} label='Email' />
                            <button className="button type1">Get OTP
                               {this.state.loading && <i class="fa fa-spinner fa-spin"></i>}
                               </button>
                        </form>}
                        {this.state.form === 2 && <form onSubmit={this.props.handleSubmit(this.onFormTwoSubmit)}>
                            <Field name='otp' type='text' component={this.renderField} label='OTP' />
                            <Field name='password' type='password' component={this.renderField} label='New Password' />
                            <Field name='confirmPassword' type='password' component={this.renderField} label='Confirm Password' />
                            <button className="button type1">Reset Password
                               {this.state.loading && <i class="fa fa-spinner fa-spin"></i>}
                               </button>
                        </form>}
                        {/* {this.state.form === 3 && <form onSubmit={this.props.handleSubmit(this.onFormThreeSubmit)}>
                            <Field name='password' type='password' component={this.renderField} label='New Password' />
                            <Field name='confirmPassword' type='password' component={this.renderField} label='Confirm Password' />
                            <button className="button type1">Reset Password
                               {this.state.loading && <i class="fa fa-spinner fa-spin"></i>}
                               </button>
                        </form>} */}
                    </div>
                </div>
            </div>
        )
    }
}

const formWrapper =  reduxForm({
    form: 'resetPassword', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true,
    validate
  })(ResetPassword);

const mapStateToprops = state => {
    return{
        forgotPasswordData: state.authReducer.forgotPassword,
        resetPasswordData: state.authReducer.resetPassword,
        errors: state.errors
    }
}

const connectProps = connect(mapStateToprops, {
    forgotPasswordAction,
    resetPasswordAction
})(formWrapper)

export default connectProps;