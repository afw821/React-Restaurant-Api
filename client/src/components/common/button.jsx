import React from "react";
import { Link } from "react-router-dom";

const Button = ({ route, btnClass, spanClass, btnText }) => {
  let newBtnClass = "btn btn-lg ";
  let newSpanClass = "fa ";

  newBtnClass += btnClass;
  newSpanClass += spanClass;

  return (
    <Link to={route}>
      <button className={newBtnClass}>
        <span className={newSpanClass}></span>
        {btnText}
      </button>
    </Link>
  );
};

export default Button;
