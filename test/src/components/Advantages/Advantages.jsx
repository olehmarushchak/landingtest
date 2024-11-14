import React from "react";
import "./Advantages.scss";
import { VARS } from "../../vars";
import { Tile } from "./Tile/Tile";

export const Advantages = () => {
  return (
    <div className="Advantages">
      <div className="Advantages__top">Advantages</div>

      <div className="Advantages__bottom">
        {VARS.tiles.map((tile) => (
          <Tile title={tile.title} text={tile.text} mod={tile.mod} />
        ))}
      </div>
    </div>
  );
};
