import React from "react";
import "./FirstForm.scss";

export const FirstForm = () => {
  return (
    <div className="FirstForm">
      <div className="FirstFrom__container">
          <div className="FirstForm__info">
            <h2 className="FirstForm__info__title">
              Companies, universities,
              <br /> directors and presidents
            </h2>
            <p className="FirstForm__info__p">
              If you'd like to learn more information about our work with large{" "}
              <br />
              organizations, let's schedule a call.{" "}
            </p>
          </div>
          <form className="FirstForm__form">
            <input
              className="FirstForm__form__input"
              type="text"
              placeholder="Name"
            />
            <input
              className="FirstForm__form__input"
              type="email"
              placeholder="Email"
            />
            <div className="FirstForm__form__container">
              <button className="FirstForm__form__button">Schedule a call</button>
            </div>
          </form>
      </div>
    </div>
  );
};
