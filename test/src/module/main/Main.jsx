import React from "react";
import "./Main.scss";
import { TopPage } from "../../components/TopPage/TopPage";
import { Advantages } from "../../components/Advantages/Advantages";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Courses } from "../../components/Courses/Courses";
import { FirstForm } from "../../components/FirstForm/FirstForm";
import { Comments } from "../../components/Comments/Comments";
import { SecondForm } from "../../components/SecondForm/SecondForm";

export const Main = () => {
  return (
    <div className="Main">
      <TopPage />

      <Advantages />

      <AboutUs />

      <Courses />

      <FirstForm />

      <Comments />

      <SecondForm />
    </div>
  );
};
