import React, { Component } from "react";
import Jumbotron from "./common/jumbotron";
import Button from "./common/button";
import { renderButtons } from "./../utils/renderBtns";

class Reservations extends Component {
  render() {
    const text = "Make your reservation";
    const buttons = renderButtons("reservations");

    return <Jumbotron text={text} buttons={buttons} />;
  }
}

export default Reservations;
