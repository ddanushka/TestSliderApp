import React from "react";

const SliderItem = (props) => {
  return (
    <div className="slider-item">
      <h3>{props.data.title}</h3>
      <p>
      {props.data.content}
      </p>
    </div>
  );
};
export default SliderItem;
