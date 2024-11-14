import React from "react";
import "./HeaderNav.scss";
import { NavList } from "./NavList/NavList";

export const HeaderNav = () => {
  return (
    <div className="HeaderNav">
      <a className="HeaderNav__logo" href="#"></a>

      <NavList />

      <button className="HeaderNav__button">Login</button>
    </div>
  );
};
