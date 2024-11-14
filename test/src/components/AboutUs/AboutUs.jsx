import React from "react";
import "./AboutUs.scss";

export const AboutUs = () => {
  return (
    <div id="about-us" className="AboutUs anchor-target">
      <div className="AboutUs__top">
        <div className="AboutUs__top__title">About us</div>

        <div className="AboutUs__top__button">Learn more</div>
      </div>

      <div className="AboutUs__bottom">
        <img
          className="AboutUs__bottom__img"
          src="icons/about-us.svg"
          alt="abouUs"
        />

        <div className="AboutUs__bottom__info">
          <div className="AboutUs__bottom__info__top">
            <h3 className="AboutUs__bottom__info__top__title">
              Hi, we’re Dickens Executive Coaching Academy{" "}
            </h3>

            <p className="AboutUs__bottom__info__top__p">
              Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor id
              proin rhoncus elit. Orci lacus pellentesque ultrices ut aliquet
              non fusce faucibus dictumst. Massa sit aliquam quam urna nam.
              Maecenas massa varius scelerisque pellentesque. Vestibulum ut
              rhoncus iaculis eleifend. Euismod cras et tortor at pellentesque
              duis cursus donec.
            </p>
          </div>

          <div className="AboutUs__bottom__info__bottom">
            <div className="AboutUs__bottom__info__bottom__left">
              <h3 className="AboutUs__bottom__info__bottom__left__title">5+</h3>

              <p className="AboutUs__bottom__info__bottom__left__p">
                years on the educational market
              </p>
            </div>

            <div className="AboutUs__bottom__info__bottom__right">
              <h3 className="AboutUs__bottom__info__bottom__right__title">
                1000+
              </h3>

              <p className="AboutUs__bottom__info__bottom__right__p">
                successful graduates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
