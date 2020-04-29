import React from "react";
import "./card-list.styles.scss";
import { Card } from "../card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => {
      return <Card key={monster.id} monster={monster}></Card>;
    })}
  </div>
);
