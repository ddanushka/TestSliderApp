import React from "react";
import CarouselSlider from "./carouselSlider";

import img from "../img/slider-2-lg.jpg";
import imgMd from "../img/slider-2-md.jpg";
import imgSm from "../img/slider-2-sm.jpg";
import imgXs from "../img/slider-2-xs.jpg";

const SecondSlider = (props) => {
  return (
    <div className="component second-component">
      <picture className="background-img">
        <source media="(min-width: 992px)" srcSet={props.pageData.sliderPage.backgroundImage.md || imgMd} />
        <source media="(min-width: 768px)" srcSet={props.pageData.sliderPage.backgroundImage.sm || imgSm} />
        <source media="(min-width: 369px)" srcSet={props.pageData.sliderPage.backgroundImage.xs || imgXs} />
        <img src={props.pageData.sliderPage.backgroundImage.lg || img} alt="IfItDoesntMatchAnyMedia" />
      </picture>
      <main className="main-content-slider">
        <div className="slider-wrapper">
          <h1 className="main-content__header fadein-text">{props.pageData.sliderPage.title}</h1>
          <CarouselSlider slideData={props.pageData.sliderPage.slider} />
        </div>
      </main>
    </div>
  );
};
export default SecondSlider;
