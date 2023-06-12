import React from "react";
import { useState } from "react";

const ProjectCard = () => {
  const [cardSplit,setCardSplit] = useState(false);
  const handleCardGroupClick = () =>{
    setCardSplit(!cardSplit);
    console.log(cardSplit);
  }
  return (
    <div className="cardGroup h-full w-full hover" onClick = {handleCardGroupClick}>
      <div className={`card absolute ${cardSplit?"movelefthigh":""} flex border z-0 border-blue-600 flex-wrap main-card h-full w-full content-center justify-center`}>Jassi</div>
      <div className={`card absolute ${cardSplit?"moveleftlow":""} flex border z-0 border-blue-600 flex-wrap main-card h-full w-full content-center justify-center`}>teri</div>
      <div className={`card absolute ${cardSplit?"moverightlow":""} flex border z-0 border-blue-600 flex-wrap main-card h-full w-full content-center justify-center`}>randi</div>
      <div className={`card absolute ${cardSplit?"moverighthigh":""} flex border z-0 border-blue-600 flex-wrap main-card h-full w-full content-center justify-center`}>ma</div>
    </div>
  );
};

export default ProjectCard;
