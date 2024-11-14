import React from "react";
import { Course } from "./Course/Course";
import { VARS } from "../../vars";
import "./Courses.scss";

export const Courses = () => {
  return (
    <div id="courses" className="Courses anchor-target">
      <h3 className="Courses__title">Our courses</h3>

      <div className="Courses__items">
        {/* not good use index for key */}
        {VARS.courses.map((el, index) => (
          <Course
            key={index}
            title={el.title}
            features={el.features}
            ul={el.ul}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};
