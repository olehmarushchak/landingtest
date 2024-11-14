import React from "react";
import "./Tile.scss";

export const Tile = ({ title, text, mod }) => {
  return (
    <div className="Tile">
      <picture className={`Tile__icon Tile__icon--${mod}`}></picture>

      <h4 className="Tile__title">{title}</h4>

      <p className="Tile__p">{text}</p>
    </div>
  );
};
