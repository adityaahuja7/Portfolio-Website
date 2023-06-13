import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, 
  max: 26, 
  perspective: 1500, 
  scale: 1,
  speed: 2000, 
  transition: false, 
  axis: null, 
  reset: true, 
  easing: "cubic-bezier(.03,.98,.52,.99)", 
};

const TiltCard = ({text}) => {
  return (
    <Tilt
      options={defaultOptions}
      className="w-96 h-96 bg-contain bg-no-repeat bg-gray-600 shadow-xl  shadow-gray-950 rounded-xl"
    >
      <div className="card-container flex flex-wrap justify-center content-center h-full w-full neon">
        {text}
      </div>
    </Tilt>
  );
};

export default TiltCard;
