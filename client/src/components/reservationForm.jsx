import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { makeReservation } from "../services/reservationService";

class ReservationForm extends Form {
  state = {
    data: { name: "", phoneNumber: "", email: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phoneNumber: Joi.string().required().label("Phone Number"),
    email: Joi.string().email().required().label("E-Mail"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await makeReservation(data.name, data.email, data.phoneNumber);
      this.setState({ data: { name: "", phoneNumber: "", email: "" } })
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">Table Reservation</div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email")}
                {this.renderPhoneInput("phoneNumber", "Phone No")}
                {this.renderButton("Submit")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationForm;
