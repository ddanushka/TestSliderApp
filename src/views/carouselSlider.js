import React from "react";
import Carousel from "react-multi-carousel";
import SliderItem from "./sliderItem";
import "../styles/carouselSlider.css";

const CarouselSlider = (props) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3200,
        min: 1200,
      },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1200,
        min: 570,
      },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 569,
        min: 0,
      },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
  };
  return (
    <Carousel
      slidesToSlide={1}
      containerClass="carousel-with-custom-dots"
      responsive={responsive}
      partialVisible
    >
      {console.log(props.slideData.length)}
      {props.slideData.map((slide) => {
        return <SliderItem key={slide.id} data={slide}></SliderItem>;
      })}
    </Carousel>
  );
};

export default CarouselSlider;
