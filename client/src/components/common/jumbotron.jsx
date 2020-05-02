import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = ({ text }) => {
    return (
        <div class="jumbotron">
            <h1 class="text-center">
                <span class="fa fa-fire"></span> Hot Restaurant
      </h1>
            <hr />
            <h2 class="text-center">{text}</h2>
            <br />
            <div class="text-center">
                <Link to="/tables">
                    <button class="btn btn-lg btn-primary">
                        <span class="fa fa-list-alt"></span> View Tables
          </button>
                </Link>
                <a href="/reservations">
                    <button class="btn btn-lg btn-danger">
                        <span class="fa fa-credit-card"></span> Make Reservation
          </button>
                </a>
            </div>
        </div>
    );
};

export default Jumbotron;