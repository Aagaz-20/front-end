import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { loginDataAction, logoutAction } from '../actions';
import history from "./history";

import Home from './home/home';
import Registration from './registration/registeration';
import Login from './login/login';
import ResetPassword from './login/resetPassword';
import Navbar from './home/navbar';
import MainLogo from './utils/mainLogo';
import Events from './events/events';
import Accommodation from './accomodation/accomodation';
import Sponsers from './sponsers/sponsers';
import Pronites from './events/pronite';
import Team from './team/team';

class App extends React.Component{
    componentDidMount(){
      if(window.localStorage.getItem('token')){
        this.props.loginDataAction(window.localStorage.getItem('token'))
      }else{
        this.props.logoutAction();
      }
    }
    render(){
        return (
          <div className='main-wrapper'>
          <ReactNotification />
            
              
              <Router history={history}>
                <Navbar />
                <MainLogo />
                <Route path="/" exact component={Home} />
                <Route path='/registration' exact component={Registration} />
                <Route path='/login' exact component={Login} />
                <Route path='/resetpassword' exact component={ResetPassword} />
                <Route path='/events' exact component={Events} />
                <Route path='/accommodation' exact component={Accommodation} />
                <Route path='/sponsers' exact component={Sponsers} />
                <Route path='/pronites' exact component={Pronites} />
                <Route path='/contactus' exact component={Team} />
              </Router>
            </div>
          );
    }
}

const mapStateToProps = (state) =>{
  return{
    authReducer: state.authReducer
  }
}

const connectProps = connect(mapStateToProps, { loginDataAction, logoutAction })(App)

export default connectProps;
