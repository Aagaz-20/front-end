import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisterSuccess extends React.Component{
    state ={
        popup: false
    }

    onPaymentClick = () => {
        if(this.state.popup === false){
        this.setState({popup: true})
        }else{
            this.setState({ popup: false})
        }
    }

    render(){
        return(
            <div className='page-register-success'>
                <span className='page-register-success--heading'>Thank You</span>
                <div className='page-content'>
                    <div className='page-content--note'>
                        You have been Successfully Registered for Aagaz 2020.<br />
                        We are Looking forward to having you here at Aagaz from 15th february to 17th february!<br/>
                        <span>Before Login, Please Verify your Email Address by clicking on the link sent to you on your given email address</span>
                    </div>
                    {this.props.authReducer && this.props.authReducer.data && this.props.authReducer.data.college !== 'HBTU' && this.props.authReducer.data.accomodation === 'no' && <div className='registration-charge'>
                        You have pay the Registraion Charge of Rs.400/-.
                        <button onClick={this.onPaymentClick}  className="button type1">Pay Now</button>
                        {this.state.popup && <div className='popup' >
                            <iframe src="https://www.townscript.com/widget/aagaz-registration-304212" frameBorder="0"></iframe> 
                            <button onClick={this.onPaymentClick}>Cancel</button>
                        </div>}
                        Note: 
                        <ul>
                            <li>This Charge is per Person</li>
                            <li>By Paying this Charge you can Participate in Any Sport Event once</li>
                            <li>You will get free Entries in ProNites</li>
                            <li>Please Note that Accommodation is not includes in this ticket (" If you want Accommodation then you can pay Accommodation charge on accomodation page. If you opt for Accommodation, In that case you don't need to pay this charge ")</li>
                            <li>Please bring a copy of payment reciept along with you on the time of Reporting to Fest</li>
                            <li>Please bring any valid College ID along with you</li>
                        </ul>
                    </div>}
                    {this.props.authReducer && this.props.authReducer.data && this.props.authReducer.data.college !== 'HBTU' && this.props.authReducer.data.accomodation === 'yes' && <div className='registration-charge'>
                        Please Pay the Accommodation Charge on Accommodation page
                        <Link to='/accommodation' className='link'><button className='button type1'>Pay Now</button></Link>
                    </div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        authReducer: state.authReducer
    }
}

const connectProps = connect(mapStateToProps)(RegisterSuccess);

export default connectProps;