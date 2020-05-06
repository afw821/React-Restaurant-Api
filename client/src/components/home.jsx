import React from "react";
import Jumbotron from "./common/jumbotron";
import { renderButtons } from "./../utils/renderBtns";
const Home = (props) => {
  const text =
    "We only have 6 tables! Book your seat before they are all gone!";

  return (
    <Jumbotron
      text={text}
      buttons={renderButtons("home")}
      renderClearBtn={false}
    />
  );
};

export default Home;
