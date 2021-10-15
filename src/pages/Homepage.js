import React from "react";
import CarouselDiv from "../components/CarouselDiv";
import CardContainer from "../components/CardContainer";

function Homepage() {
  return (
    <div>
      <CarouselDiv className="carousel-holder" />
      <CardContainer title="Recommendations based on your search  " />
      <CardContainer title="Laptops and Desktops" />
      <CardContainer title="Mobiles and Tablets" />
      <CardContainer title="Digital Smart Watches" />
      <CardContainer title="Speakers and Microphones" />
      <CardContainer title="Smart T.V." />
      <CardContainer title="Camera" />
    </div>
  );
}

export default Homepage;
