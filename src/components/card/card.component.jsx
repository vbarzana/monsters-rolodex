import React from "react";

import "./card.styles.scss";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      width="80"
      src={
        props.monster.image ||
        `https://robohash.org/${props.monster.id}?set=set2&size=180x180`
      }
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
