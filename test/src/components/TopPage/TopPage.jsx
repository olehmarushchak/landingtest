import React from "react";
import "./TopPage.scss";

export const TopPage = () => {
  return (
    <div id="home" className="TopPage anchor-target">
      <div className="TopPage__firstPart">
        <h1 className="TopPage__firstPart__h1">
          Welcome to <br />
          Dickens Executive <br />
          Coaching Academy
        </h1>

        <div className="TopPage__firstPart__bottom">
          <p className="TopPage__firstPart__bottom__p">
            Your resource of choice for coaching education
          </p>

          <button className="TopPage__firstPart__bottom__button">
            Explore Courses
          </button>
        </div>
      </div>
      <div className="TopPage__secondPart"></div>
    </div>
  );
};
