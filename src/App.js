import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent'
import LoginComponent from './components/LoginComponent';
import Welcome from './components/Welcome';
import history from './history';
import Routes from './components/Routes';
import {useRoutes} from 'hookrouter'
//import {createBrowserHistory as history} from 'history'

const App = () =>  {
  const route = useRoutes(Routes);
  return route;
    // <React.Fragment>
    //   <Welcome />
    // <Router history = {history}>
    //   <Switch>
    //   <Route exact path="/" component={Welcome}></Route>
    //   <Route exact path="/SignUp" component={SignUpComponent}></Route>
    //   <Route exact path="/Login" component = {LoginComponent}></Route>
    //   </Switch>
    // </Router>
    // </React.Fragment>
    //<Routes />
    //route
  
}

export default App;
