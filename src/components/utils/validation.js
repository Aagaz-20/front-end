const validate = values => {
    const errors ={}

    if(!values.firstName){
        errors.firstName = 'Required';
    }

    if( !values.email){
        errors.email = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if( !values.phone){
        errors.phone = 'Required'
    }else if(isNaN(Number(values.phone))) {
        errors.phone = 'Must be a number'
    }else if( values.phone.length < 10){
        errors.phone = 'Phone No. must have 10 characters'
    }

    if( !values.password){
        errors.password='Required'
      }else if(!/(?=.*[a-z])/i.test(values.password)){
        errors.password='Password must contain an Alphabate'
      }else if( !/(?=.*[0-9])/i.test(values.password)){
        errors.password= 'Password Must contain a Number'
      }else if(!/(?=.{8,})/i.test(values.password)){
         errors.password = 'Password Should be greater than 8 Characters'
       }
  
      if( values.confirmPassword !== values.password){
        errors.confirmPassword = 'Passwords do not Match'
      }

    if(!values.gender){
        errors.gender = 'Required'
    }

    if(!values.college){
        errors.college = 'Required'
    }

    if(!values.accomodation){
        errors.accomodation = 'Required'
    }

    if(!values.collegeName){
        errors.collegeName = 'Required'
    }

    return errors;
}

export default validate;