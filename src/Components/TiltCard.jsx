import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 45, // max tilt rotation (degrees)
  perspective: 900, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.2, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: false, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const TiltCard = ({text}) => {
  return (
    <Tilt
      options={defaultOptions}
      className="w-96 h-96 bg-contain bg-no-repeat bg-gray-600  border border-purple-500 shadow-xl rounded-xl"
    >
      <div className="card-container flex flex-wrap justify-center content-center h-full w-full neon">
        {text}
      </div>
    </Tilt>
  );
};

export default TiltCard;
