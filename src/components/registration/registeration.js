import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Redirect } from 'react-router-dom';
import validate from '../utils/validation';
import { store } from 'react-notifications-component';

//actions
import { registerAction } from '../../actions';

//images
import shapeImage from '../../images/purple-blue-shape.png';

class Registration extends React.Component{
    state = {
        isCollegeHBTU: true,
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

    renderRadioButton = ({label, optionOne, optionTwo, input: { value }, meta: {pristine, dirty, active, touched, error } }) =>{
        return(
            <div className='input-field--radio' >

            { <span className='radio-label'>{label}</span>}

            <label className={  dirty || active ? ( value=== 'male' || value === 'HBTU' || value === 'yes' ? `input-field--radio--label touched optionOne`: 'input-field--radio--label' ) : 'input-field--radio--label'}>
                <Field name={label} component='input' type="radio" value={optionOne} disabled={value && pristine ? true : false } />{' '}
                {optionOne}
                <span className="checkmark"></span>
            </label>
            <label className={ dirty || active ? ( value=== 'female' || value === 'other' || value === 'no' ? `input-field--radio--label touched optionTwo`: 'input-field--radio--label' ) : 'input-field--radio--label'}>
                <Field name={label} component='input' type="radio" value={optionTwo} disabled={value && pristine ? true : false } />{' '}
                {optionTwo}
                <span className="checkmark"></span>
            </label>
            
            {touched && error ? <span className='input-field--value-error'>{error}</span> : false}
            </div>
        );
      }

    onFormSubmit = async (formValues) => {
        // console.log(formValues);
        this.setState({loading: true, error: true})
        const response = await this.props.registerAction(formValues);
        if(response){
            this.setState({loading: false})
        }
    }

    render(){
        if(this.props.authReducer.isRegistered){
            store.addNotification({
                title:  'Success',
                message:  'Registered Successfully',
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
            return <Redirect to='/registersuccess' />
        }
        return(
            <div className='page-wrapper registration'>
                <div className='form-wrapper'>
                    <img src={shapeImage} alt='bubble' />
                    <div className='form-container'>
                        <span className='form-title'>Register</span>
                        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                            <Field name='firstName' type='text' component={this.renderField} label='First Name' />
                            <Field name='lastName' type='text' component={this.renderField} label='Last Name' />
                            <Field name='email' type='email' component={this.renderField} label='Email' />
                            <Field name='phone' type='text' component={this.renderField} label='Phone Number' />
                            <Field name='password' type='password' component={this.renderField} label='Password' />
                            <Field name='confirmPassword' type='password' component={this.renderField} label='Confirm Password' />
                            <Field name='gender' label='gender' optionOne='male' optionTwo='female' component={this.renderRadioButton} />
                            <Field name='college' label='college' optionOne='HBTU' optionTwo='other' component={this.renderRadioButton} />
                            {this.props.collegeValue === 'other' && <Field name='collegeName' type='text' component={this.renderField} label='College Name' />}
                            {this.props.collegeValue === 'other' && <Field name='accommodation' label='accommodation' optionOne='yes' optionTwo='no' component={this.renderRadioButton} />}
                            <div className='form-button'>
                                <button className="button type1" >
                                    Register
                                    {this.state.loading && <i className="fa fa-spinner fa-spin"></i>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
} 

Registration =  reduxForm({
    form: 'registration', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(Registration);

const selector = formValueSelector('registration') // <-- same as form name
Registration = connect(
  state => {
    // can select values individually
    const collegeValue = selector(state, 'college') 
    return {
        collegeValue
    }
  }
)(Registration)

const mapStateToProps =(state) => {
    return{
        authReducer: state.authReducer,
        errors: state.errors
        
    }
}

const connectProps = connect(mapStateToProps, {
    registerAction
})(Registration)

  export default connectProps;