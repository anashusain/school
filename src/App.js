import React, { Component } from 'react';
import StudentResultBoard from "./containers/StudentResultBoard";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import SchoolAdmission from "./containers/SchoolAdmission";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><NavLink
              to="/results"
              exact
              //activeClassName="my-active"
              activeStyle={{
                color: '#fa923f',
                textDecoration: 'underline'
              }}>Results</NavLink></li>
            <li><NavLink to={{
              pathname: '/admission',
            }}
            activeStyle={{
              color: '#fa923f',
              textDecoration: 'underline'
            }}>Admissions</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/results" component={StudentResultBoard} />
          <Route path="/admission" component={SchoolAdmission} />
          <Redirect from="/" to="/results" /> 
        </Switch>



        {/* <StudentResultBoard/> */}
      </div>
    );
  }
}

export default App;
