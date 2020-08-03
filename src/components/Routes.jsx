import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link,
} from "react-router-dom";
import SignUpComponent from "./SignUpComponent";
import LoginComponent from "./LoginComponent";
import Welcome from './Welcome';
//import history from '../history';

// export default class Routes extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Welcome />
//         <Router>
          
//             <Route  exact path="/" component={Welcome}></Route>
//             <Route   path="/SignUp" component={SignUpComponent}></Route>
//             <Route   path="/Login" component={LoginComponent}></Route>
          
//           <Link to="/"><Welcome ></Welcome></Link>
//         </Router>
        
//       </React.Fragment>
//     );
//   }
// }
const Routes = {
    "/":() => <Welcome />,
    "/SignUp":()=><SignUpComponent />,
    "/Login":()=> <LoginComponent />
}

export default Routes;