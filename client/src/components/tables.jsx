import React, { Component } from "react";
import Jumbotron from "./common/jumbotron";

class Tables extends Component {
    state = {};
    render() {
        const text = "Current Reservations and Waiting List";

        return <Jumbotron text={text} />;
    }
}

export default Tables;