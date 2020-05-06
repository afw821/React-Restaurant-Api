import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const Jumbotron = ({ text, buttons, renderClearBtn, onDelete }) => {
  console.log("jumbotron render clear button", renderClearBtn);
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
            <button className="btn btn-danger mt-3" onClick={() => onDelete()}>
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Jumbotron;
