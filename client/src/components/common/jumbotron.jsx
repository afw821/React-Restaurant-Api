import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const Jumbotron = ({ text, buttons, renderClearBtn }) => {
  return (
    <div className="jumbotron">
      <h1 className="text-center">
        <span className="fa fa-fire"></span> Hot Restaurant
      </h1>
      <hr />
      <h2 className="text-center">{text}</h2>
      <br />
      <div className="text-center">
        {buttons.map((button) => button.content())}
        {renderClearBtn && (
          <>
            <br />
            <Button btnClass="btn-danger mt-3" spanClass="" btnText="Clear" />
          </>
        )}
      </div>
    </div>
  );
};

export default Jumbotron;
