import React from "react";
import Jumbotron from "./common/jumbotron";
import Button from "./common/button";
import { renderButtons } from "./../utils/renderBtns";
const Home = (props) => {
  const text =
    "We only have 5 tables! Book your seat before they are all gone!";
  const buttons = renderButtons("home");

  return <Jumbotron text={text} buttons={buttons} renderClearBtn={true} />;
};

export default Home;
