import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="Footer">
      <img className="Footer__logo" src="icons/Logo.svg" alt="logo" />

      <a href="#home" className="Footer__info">
        © 2024 Dickens Consulting Group, LLC
      </a>

      <ul className="Footer__nav">
        <li className="Footer__nav__item">
          <a href="#courses" className="Footer__nav__link">
            Course
          </a>
        </li>

        <li className="Footer__nav__item">
          <a href="#about-us" className="Footer__nav__link">
            About
          </a>
        </li>

        <li className="Footer__nav__item">
          <a href="#" className="Footer__nav__link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
