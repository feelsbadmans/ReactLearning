import React, { useEffect, useState } from "react";
import EpisodeBlock from "../EpisodeBlock/EpisodeBlock";
import "../../index.css";
import {useWindowWidth} from "../../hooks/useWindowsWidth"
import {  useDispatch, useSelector } from "react-redux";
import { findValueElementsPerPage } from "./actionsCarousel";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface PropsCarousel {
  episodes : Array<object>,
  key: number
}

const getPages = (elementsCount:number, elementsPerPage : number) => {
  if ( elementsCount % elementsPerPage === 0){
    return Math.floor(elementsCount /elementsPerPage);
  } 
  else{
    return Math.floor(elementsCount /elementsPerPage) + 1;
  }
}

function Carousel(props : PropsCarousel) {
  const width : number = useWindowWidth();
  const elementsCount : number = props.episodes.length;

  const {elementsPerPage} = useTypedSelector(state => state.carouselBlockReducer);
  const dispatchPage = useDispatch();
  console.log(props.key);
  useEffect(() => {
    dispatchPage(findValueElementsPerPage(width, elementsCount));
  },[width])

  let pagesCount : number = getPages(elementsCount, elementsPerPage);
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
          <EpisodeBlock episodes={episodes} X={X}></EpisodeBlock>
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
