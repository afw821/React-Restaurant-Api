import React, { Component } from "react";
import Jumbotron from "./common/jumbotron";
import { renderButtons } from "./../utils/renderBtns";
import ReservationForm from "./reservationForm";

class Reservations extends Component {
  render() {
    const text = "Make your reservation";

    return (
      <>
        <Jumbotron text={text} buttons={renderButtons("reservations")} />
        <ReservationForm />
      </>
    );
  }
}

export default Reservations;
