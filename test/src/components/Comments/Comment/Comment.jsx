import React from "react";
import "./Comment.scss";

export const Comment = ({ name, role, countStar, text, img }) => {
  return (
    <div className="Comment">
      <img className="Comment__img" src={img} alt="img" />

      <div className="Comment__left">
        <h4 className="Comment__left__name">{name}</h4>
        <p className="Comment__left__role-name">{role}</p>

        <ul className="Comment__left__stars">
          {countStar.map(() => (
            <li className="Comment__left__star"></li>
          ))}
        </ul>

        <p className="Comment__left__text">{text}</p>
      </div>
    </div>
  );
};
