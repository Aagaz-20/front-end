import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import history from "./history";

import Home from './home/home';

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
              <Router history={history}>
                <Route path="/" exact component={Home} />
              </Router>
            </Provider>
          );
    }
}

export default App;
