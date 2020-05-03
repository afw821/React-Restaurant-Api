import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import NumberFormat from "react-number-format";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label, isValidator) {
    return <button className="btn btn-info btn-sm">{label}</button>;
  }
  renderPhoneInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <NumberFormat
          format="(###) ###-####"
          value={data[name]}
          className="form-control"
          name={name}
          onChange={this.handleChange}
          type={type}
          error={errors[name]}
        />
      </div>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        type={type}
        error={errors[name]}
      />
    );
  }
}

export default Form;
