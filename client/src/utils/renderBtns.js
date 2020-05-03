import React from "react";
import Button from "./../components/common/button";

export function renderButtons(page) {
  switch (page) {
    case "home":
      var buttons = [
        {
          content: () => (
            <Button
              route="/tables"
              btnClass="btn-primary mr-2"
              spanClass="fa-list-alt"
              btnText="View Tables"
            />
          ),
        },
        {
          content: () => (
            <Button
              route="/reservations"
              btnClass="btn-danger"
              spanClass="fa-credit-card"
              btnText="Make Reservation"
            />
          ),
        },
      ];
      break;
    case "reservations":
      var buttons = [
        {
          content: () => (
            <Button
              route="/tables"
              btnClass="btn-primary mr-2"
              spanClass="fa-list-alt"
              btnText="View Tables"
            />
          ),
        },
        {
          content: () => (
            <Button
              route="/home"
              btnClass="btn-default bg-color"
              spanClass="fa-home"
            />
          ),
        },
      ];
      break;
    case "tables":
      var buttons = [
        {
          content: () => (
            <Button
              route="/reservations"
              btnClass="btn-danger mr-2"
              spanClass="fa-credit-card"
              btnText="Make Reservation"
            />
          ),
        },
        {
          content: () => (
            <Button
              route="/home"
              btnClass="btn-default bg-color"
              spanClass="fa-home"
            />
          ),
        },
      ];
      break;
  }

  return buttons;
}
