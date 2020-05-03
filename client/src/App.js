import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Tables from "./components/tables";
import Reservations from "./components/reservations";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/tables" component={Tables} />
            <Route path="/reservations" component={Reservations} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
