import React from "react";
import "./Course.scss";

export const Course = ({ title, features, ul, price }) => {
  return (
    <div className="Course">
      <div className="Course__top">
        <h4 className="Course__top__title">{title}</h4>

        <div className="Course__top__button">Details</div>
      </div>

      <div className="Course__features">
        {features.map((el) => (
          <div
            className={`Course__features__feature Course__features__feature--${el.mod}`}
          >
            {el.text}
          </div>
        ))}
      </div>

      <p className="Course__title">
        The Three Primary Coaching Program Models:
      </p>

      {ul.map((el) => (
        <ul className="Course__list">
          {el.title}

          {el.list.map((el) => (
            <li className="Course__list__item">{el}</li>
          ))}
        </ul>
      ))}

      <span className="Course__price"> {`Price | $${price}`}</span>

      <button className="Course__button">join</button>
    </div>
  );
};
