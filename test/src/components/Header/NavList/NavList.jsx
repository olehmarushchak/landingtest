import React from "react";
import "./NavList.scss";

export const NavList = () => {
  return (
    <div className="NavList">
      <ul className="NavList__items">
        <li className="NavList__item">
          <a href="#home" className="NavList__link">
            Home
          </a>
        </li>

        <li className="NavList__item">
          <a href="#courses" className="NavList__link NavList__link--arrow">
            Courses
          </a>
        </li>

        <li className="NavList__item">
          <a href="#about-us" className="NavList__link">
            About
          </a>
        </li>

        <li className="NavList__item">
          <a href="#contact" className="NavList__link">
            Contact us
          </a>
        </li>
      </ul>
    </div>
  );
};
