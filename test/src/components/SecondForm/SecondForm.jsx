import React from "react";
import { VARS } from "../../vars";
import "./SecondForm.scss";

export const SecondForm = () => {
  return (
    <div id="contact" className="SecondForm anchor-target">
      <div className="SecondForm__container">
        <h2 className="SecondForm__title">FAQ</h2>

        <div className="container">
          <ul className="SecondForm__list">
            {VARS.FAQ.map((el) => (
              <li className="SecondForm__list__item">
                <div
                  className={`SecondForm__list__item__top SecondForm__list__item__top--${
                    el.style ? "minus" : ""
                  }`}
                >
                  {el.text}
                  <div
                    className={`SecondForm__list__item__img SecondForm__list__item__img--${
                      el.style ? "minus" : ""
                    }`}
                  ></div>
                </div>
                {el.style && (
                  <p className="SecondForm__list__item__active">{el.addText}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="SecondForm__right">
            <h4 className="SecondForm__right__title">Ask your question</h4>

            <form action="" className="SecondForm__right__form">
              <input
                className="SecondForm__right__form__input"
                type="text"
                placeholder="Name"
              />

              <input
                className="SecondForm__right__form__input"
                type="email"
                placeholder="Email"
              />

              <textarea
                className="SecondForm__right__form__textarea"
                name="comment"
                placeholder="Enter Your Question Here ....."
                maxLength={500}
              ></textarea>

              <button className="SecondForm__right__form__button">
                Send your message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
