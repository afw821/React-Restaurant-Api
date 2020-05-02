import React, { Component } from "react";
import Jumbotron from "./common/jumbotron";

class Reservations extends Component {
    render() {
        const text = "Make your reservation";
        //const buttons = renderButton("reservation");
        return <Jumbotron text={text} />;
    }
}

export default Reservations;