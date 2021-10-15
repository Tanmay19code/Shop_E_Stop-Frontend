import React from "react";
import Card from "./Card";

function CardContainer(props) {
  return (
    <div>
      <div className="card-container-holder">
        <div className="card-container-title">{props.title}</div>
        <hr />
        <div className="card-container-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <p id="view-more">View More</p>
      </div>
    </div>
  );
}

CardContainer.defaultProps = {
  title: "Recommendations",
};
export default CardContainer;
