import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import UsersContainer from "./components/UsersForm/UsersContainer";
import LoginContainer from "./components/Auth/LoginContainer";

class App extends Component {


  render() {
    return (
      <Router>
        <nav>
          <NavLink to="/login">Log in</NavLink>
        </nav>
        <Route exact path="/form" component={UsersContainer} />
        <Route exact path="/login" component={LoginContainer} />
      </Router>
    );
  }
}

export default App;
