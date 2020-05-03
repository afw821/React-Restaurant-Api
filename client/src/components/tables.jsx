import React, { Component } from "react";
import Jumbotron from "./common/jumbotron";
import Button from "./common/button";
import { renderButtons } from "./../utils/renderBtns";

class Tables extends Component {
  render() {
    const buttons = renderButtons("tables");
    const text = "Current Reservations and Waiting List";

    return <Jumbotron text={text} buttons={buttons} />;
  }
}

export default Tables;
