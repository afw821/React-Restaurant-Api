import React, { Component } from "react";
import Jumbotron from "./common/jumbotron";
import { renderButtons } from "./../utils/renderBtns";
import { getReservations } from "./../services/reservationService";
import { getWaitlist, emptyWaitList } from "./../services/waitListService";
import List from "./common/lists";

class Tables extends Component {
  state = {
    reservations: [],
    waitList: [],
  };
  async componentDidMount() {
    //reservations
    const { data: reservations } = await getReservations();
    //waitList
    const { data: waitList } = await getWaitlist();
    this.setState({ reservations, waitList });
  }

  handleDeleteWaitList = async () => {
    console.log('deleted');
  }

  render() {
    const text = "Current Reservations and Waiting List";
    const { reservations, waitList } = this.state;
    return (
      <>
        <Jumbotron
          text={text}
          buttons={renderButtons("tables")}
          renderClearBtn={true}
          onDelete={this.handleDeleteWaitList}
        />
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
