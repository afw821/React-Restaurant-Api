import React, { Component } from "react";
import Jumbotron from "./common/jumbotron";
import { renderButtons } from "./../utils/renderBtns";
import { getReservations } from "./../services/reservationService";
import List from "./common/lists";

class Tables extends Component {
  state = {
    reservations: [],
    waitList: [],
  };
  async componentDidMount() {
    const { data: reservations } = await getReservations();
    console.log("get reservations", reservations);
    this.setState({ reservations });
  }
  render() {
    const text = "Current Reservations and Waiting List";
    const { reservations, waitList } = this.state;
    return (
      <>
        <Jumbotron text={text} buttons={renderButtons("tables")} />
        <List
          header="Table Reservations"
          name="reservations"
          data={reservations}
          isReservation={true}
        />
        <br />
        <List
          header="Reservation Waitlist"
          name="wait list"
          data={waitList}
          isWaitlist={true}
        />
      </>
    );
  }
}

export default Tables;
