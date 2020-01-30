import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import blobImage from '../../images/blob-shape-green.svg';

class Accommodation extends React.Component{
    state={
        option: 1,
        activeArr: [,'active', ],
        popup: false

    }

    onNavClick = (option) => {
        const arr = new Array();
        arr[option] = 'active'
        this.setState({ option: option, activeArr: arr})
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
            <>
            <div className='page-accomodation'>
                <img className='blob-image' src={blobImage} alt='Green blob' />
                <div className='page-heading'>
                    Accommodation
                </div>
                <div className='page-content'>
                    <div className='page-navbar'>
                        <span className={`page-navbar--option ${this.state.activeArr[1]}`} onClick={()=> { this.onNavClick(1)}}>General</span>
                        <span className={`page-navbar--option ${this.state.activeArr[2]}`} onClick={()=> { this.onNavClick(2)}}>Privileges</span>
                        <span className={`page-navbar--option ${this.state.activeArr[3]}`} onClick={()=> { this.onNavClick(3)}}>Accommodation</span>
                    </div>
                    <div className='page-content--container'>
                        {this.state.option === 1 && <div className='page-content--container-content'>
                            <ul>
                                <li>Online Charges for Accommodation are Rs.1000/- per Person<span>Fare BreakUp: <br/>
                                    Registration + Accommodation Charges is Rs.800 per person.
                                    Caution money is Rs. 200 per person (which will be refunded after the Fest)</span>
                                </li>
                                <li>If no Accommodation, Registration fees is Rs.400/- per person.</li>
                                <li>
                                The payment receipt has to be submitted at the time of Reporting.
                                </li>
                                <li>Each participant must bring two passport size photos with them.</li>
                                <li> Each participant must carry a valid College Identity Card. (In the absence of any of the
                                    information in the Identity Card, a letter of a bonafide certificate on the official letterhead
                                    containing the missing information signed/under the seal of a competent authority may be
                                    supplied.)
                                </li>
                                <li>
                                    In exceptional circumstances the refund amount may be forfeited subject to one or more of the following conditions:
                                    <ul>
                                        <li>Permanent damage has been done to the room/dorm/accessories where accommodation has been provided.</li>
                                        <li>Rooms are not vacated before 18th February 9:00am</li>
                                        <li>In Case, You are Blacklisted by Security Team, Aagaz</li>
                                    </ul>
                                </li>

                            </ul>
                        </div>}
                        {this.state.option === 2 && <div className='page-content--container-content'>
                            <ul>
                                <li>3 days stay inside the campus during the fest</li>
                                <li>Transport i.e. pick-up and drop from the station/airport/ bus terminal, and travel between
                                    University Campus and event locations during 15th Feb to 17th Feb. Pick-up and drop
                                    service available only for contingents having minimum 40 members.
                                </li>
                                <li>Free Entry to ProNites and Fun Fair.</li>
                                <li>Breakfast, lunch and dinner on all days during the fest.</li>
                            </ul>
                        </div>}
                        {this.state.option === 3 && <div className='page-content--container-content'>
                            {this.props.authReducer && this.props.authReducer.isLoggedIn && <div>
                                <span className='payment'>Pay Your Accommodation Charges Here:</span>
                                {/* <button className='button type1'>Pay</button> */}
                                <button onClick={this.onPaymentClick}  className="button type1">Get Accommodation</button>
                                {this.state.popup && <div className='popup' >
                                <iframe src="https://www.townscript.com/widget/aagaz-accomodation-440341" frameBorder="0"></iframe> 
                                <button onClick={this.onPaymentClick}>Cancel</button>
                                </div>}
                                <span className='note'>*Please bring the Receipt of the Payment along with you at the Time of Fest.</span>
                            </div>}
                            {this.props.authReducer && !this.props.authReducer.isLoggedIn && <div>
                                <span className='payment'>Please Log into your Account to pay the Accommodation Charges</span>
                                <Link to='/login' className='link'><button className='button type1'>Login</button></Link>
                            </div>
                            }
                            
                        </div>}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authReducer: state.authReducer
    }
}

const connectProps = connect(mapStateToProps)(Accommodation)

export default connectProps;