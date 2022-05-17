import React from "react";
import background from "../video/mov_bbb.mp4";

const FirstSlider = (props) => {
  return (
    <>
      <video className="background-video" autoPlay loop muted>
        <source src={ props.pageData.homePage.backgroundVideo || background } type="video/mp4" />
      </video>
      <div className="component first-component">
        <main className="main-content">
          <h1 className="main-content__header fadein-text">
            {props.pageData.homePage.title}
          </h1>
          <span className="main-content__header__underline fadein-text"></span>
          <h2 className="main-content__subheader fadein-text">
            {props.pageData.homePage.subTitle}
          </h2>
        </main>
      </div>
    </>
  );
};
export default FirstSlider;
