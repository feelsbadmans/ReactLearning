import React, { useState } from "react";
import EpisodeBlock from "../EpisodeBlock/EpisodeBlock";
import "../index.css";
import {useWindowWidth} from "../CustomHooks/WindowsWidthHook"

interface PropsCarousel {
  episodes : Array<object>,
  key: number
}


function getElementsPerPage(width:number) : number{
  if (width > 1400) return 3;
  else if (width <= 1400 && width > 700) return 2; 
  else return 1;
}

function Carousel(props : PropsCarousel) {
  const width : number = useWindowWidth();
  const elementsCount : number = props.episodes.length;
  let pagesCount : number = 0;
  const elementsPerPage : number = getElementsPerPage(width);
  elementsCount % elementsPerPage === 0
    ? (pagesCount = Math.floor(elementsCount / elementsPerPage))
    : (pagesCount = Math.floor(elementsCount / elementsPerPage) + 1);

  
  let episodesGroups = [];
  for (let i = 0; i < pagesCount; i++) {
    episodesGroups.push(props.episodes.slice(i * elementsPerPage, (i + 1) * elementsPerPage));
  }
  if (pagesCount * elementsPerPage!== elementsCount) {
    episodesGroups.push(props.episodes.slice(pagesCount * elementsPerPage, elementsCount));
  }

  
  const [X, setX] = useState(0);
  const goPrev = () => {
    X === 0 ? setX(pagesCount * -100 + 100) : setX(X + 100);
  };
  const goNext = () => {
    X === pagesCount * -100 + 100 ? setX(0) : setX(X - 100);
  };


  return (
    <div className="carousel-box">
      {episodesGroups.map((episodes, index) => {
        return (
          <EpisodeBlock episodes={episodes} key={index} X={X}></EpisodeBlock>
        );
      })}
      <button className="default-button" id="go-prev" onClick={goPrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="default-button" id="go-next" onClick={goNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Carousel;
