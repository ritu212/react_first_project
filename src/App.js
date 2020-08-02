import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent'
import LoginComponent from './components/LoginComponent';
import Welcome from './components/Welcome';
//import {createBrowserHistory as history} from 'history'

const App = () =>  {
  return(
    <Router>
      <Route exact path="/" component={Welcome}></Route>
      <Route exact path="/SignUp" component={SignUpComponent}></Route>
      <Route exact path="/Login" component = {LoginComponent}></Route>
    </Router>
  );
}

export default App;
