import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { store } from 'react-notifications-component';

//actions
import { loginAction } from '../../actions';

//images
import shapeImage from '../../images/red-orange-shape.png';

class LoginForm extends React.Component{
    state={
        loading: false,
        error: false
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

    onFormSubmit = async (formValues) => {
        // console.log(formValues);
        this.setState({ error: true, loading: true })
        const response = await this.props.loginAction(formValues);
        if(response){
            this.setState({ loading: false})
        }
    }

    render(){
        if(this.props.loginData){
            store.addNotification({
                title:  'Success',
                message:  'Successfully Logged In',
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
            return <Redirect to='/' />
        }
        return(
            <div className='page-wrapper login'>
                <div className='form-wrapper'>
                <img src={shapeImage} alt='bubble' />
                    <div className='form-container'>
                    <span className='form-title'>Login</span>
                        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                            <Field name='email' type='email' component={this.renderField} label='Email' />
                            <Field name='password' type='password' component={this.renderField} label='Password' />
                            <button className="button type1">Login
                               {this.state.loading && <i className="fa fa-spinner fa-spin"></i>}
                               </button>
                        </form>
                        <Link to='/resetpassword' className='link'>
                        <button className='button2 type2'>Forgot Password?</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
} 

const formWrapper =  reduxForm({
    form: 'login', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true
  })(LoginForm);

const mapStateToProps = (state) => {
    return{
        authReducer: state.authReducer,
        loginData: state.authReducer.loginData,
        errors: state.errors
    }
}

const connectProps = connect(mapStateToProps,{
    loginAction
})(formWrapper)

export default connectProps;