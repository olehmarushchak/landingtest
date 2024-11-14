import React from "react";
import { VARS } from "../../vars";
import { Comment } from "./Comment/Comment";
import "./Comments.scss";

export const Comments = () => {
  return (
    <div className="Comments">
      <div className="Comments__container">
        <h2 className="Comments__title">Testimonials</h2>

        <div className="Comments__list">
          {VARS.comments.map((el) => (
            <Comment
              img={el.img}
              name={el.name}
              countStar={el.countStar}
              text={el.text}
              role={el.role}
            />
          ))}
        </div>

        <div className="Comments__buttons">
          <button className="Comments__buttons__button Comments__buttons__button--left"></button>

          <ul className="Comments__buttons__pag">
            {[1, 2, 3, 4].map((el) => (
              <li className="Comments__buttons__pag__item"></li>
            ))}
          </ul>

          <button className="Comments__buttons__button"></button>
        </div>
      </div>
    </div>
  );
};
