import React from "react";
import "./card.styles.scss";

export const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt="" />
    <h1>{props.monsters.name}</h1>
  </div>
);

export default Card;
