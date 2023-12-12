import React from "react";
import NavigateBar from "../component/NavigateBar";
import Slider from "../component/Slider";
import imagesData from "../data/imagesData";

function Home() {
  return <div className="home-Container">
    <NavigateBar />
    <Slider images={imagesData} />
  </div>;
}

export default Home;
