import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

//images
import shapeImage from '../../images/red-orange-shape.png';

class LoginForm extends React.Component{
    state={
        loading: false
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

    onFormSubmit = (formValues) => {
        console.log(formValues);
    }

    render(){
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
                               {this.state.loading && <i class="fa fa-spinner fa-spin"></i>}
                               </button>
                        </form>
                        <Link to='/forgotpassword' className='link'>
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

export default formWrapper;