import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link,
} from "react-router-dom";
import SignUpComponent from "./SignUpComponent";
import LoginComponent from "./LoginComponent";
import Welcome from './Welcome'

export default class Routes extends Component {
  render() {
    return (
      <Router>
            <Fragment>
                <Welcome />
                <Switch>
            <Route  exact path="/" component={LoginComponent}></Route>
            <Route  path="/SignUp" component={SignUpComponent}></Route>
            <Route  path="/Login" component={LoginComponent}></Route>
          </Switch >
          </Fragment>
        </Router>
        
      
    );
  }
}
// const Routes = {
//     "/":() => <Welcome />,
//     "/SignUp":()=><SignUpComponent />,
//     "/Login":()=> <LoginComponent />
// }
//export default Routes;