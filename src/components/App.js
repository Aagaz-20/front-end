import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import history from "./history";

import Home from './home/home';
import Registration from './registration/registeration';
import Login from './login/login';

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
              <Router history={history}>
                <Route path="/" exact component={Home} />
                <Route path='/registration' exact component={Registration} />
                <Route path='/login' exact component={Login} />
              </Router>
            </Provider>
          );
    }
}

export default App;
