import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import validate from '../utils/validation';
import { store } from 'react-notifications-component';
import { eventRegistrationAction } from '../../actions';
import { Redirect } from 'react-router-dom';


class EventRegisterForm extends React.Component{
    state={
        loading: false,
        error: false,
        success: false
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

    renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
        <ul>
          <li>
            <button className='button-member' type="button" onClick={() => fields.push({})}>Add Member</button>
            {(touched || submitFailed) && error && <span>{error}</span>}
          </li>
          {fields.map((member, index) =>
            <li key={index}>
              <button 
                className='button-remove'
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(index)}>X</button>
              <Field
                name={`${member}.name`}
                type="text"
                component={this.renderField}
                label="Member Name"/>
            </li>
          )}
        </ul>
      )
      

    onFormSubmit = async (formValues) => {
        // console.log(formValues, this.props.eventName);
        this.setState({loading: true, error: true, success: true})
        const response = await this.props.eventRegistrationAction(formValues, this.props.eventName, this.props.authReducer.loginData.token);
        if(response){
            this.setState({loading: false})
        }

    }


    render(){
        if(this.props.eventRegistration && this.state.loading === false && this.state.success=== true){
            store.addNotification({
                title:  'Success',
                message:  'You have Successfully Registered for this Event',
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
            this.setState({success: false})
            return <Redirect to='/events' /> 
        }
        return(
                <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    {this.props.eventType === 'team' && <Field name='teamName' type='text' component={this.renderField} label='Team Name' />}
                    {this.props.eventType === 'solo' && <Field name='name' type='text' component={this.renderField} label='Name' />}
                    <Field name='email' type='email' component={this.renderField} label='Email' />
                    <Field name='phone' type='text' component={this.renderField} label='Phone' />
                    {this.props.eventType === 'team' && <Field name='name' type='text' component={this.renderField} label='Team Leader' />}
                    {this.props.eventType === 'team' && <FieldArray name="members" component={this.renderMembers}/>}
                    <Field name='collegeName' type='text' component={this.renderField} label='College Name' />
                    <button className='button type1'>Register</button>
                </form>
        )
    }
}

const formWrapper = reduxForm({
    form: 'eventRegistration',
    validate
})(EventRegisterForm);

const mapStateToProps = (state) => {
    return {
        eventRegistration: state.eventRegistration.eventRegistration,
        initialValues:  state.authReducer.loginData,
        errors: state.errors,
        authReducer: state.authReducer
    }
}

const connectProps =  connect(mapStateToProps, {
    eventRegistrationAction
})(formWrapper);

export default connectProps;