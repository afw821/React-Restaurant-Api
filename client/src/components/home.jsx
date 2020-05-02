import React from "react";
import Jumbotron from "./common/jumbotron";

const Home = (props) => {
    const text =
        "We only have 5 tables! Book your seat before they are all gone!";
    return <Jumbotron text={text} />;
};

export default Home;