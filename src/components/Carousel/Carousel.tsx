import React, { useEffect, useState } from "react";
import EpisodeBlock from "../EpisodeBlock/EpisodeBlock";
import "../../index.css";
import {useWindowWidth} from "../../hooks/useWindowsWidth"
import {  useDispatch } from "react-redux";
import { findValueElementsPerPage } from "./actionsCarousel";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getPages } from "../functions/functions";
import { PropsCarousel } from "../../types/interfaces";



const Carousel = (props : PropsCarousel) => {
  const width : number = useWindowWidth();
  const [elementsCount, setElementsCount] = useState<number>(0);
  const [pagesCount, setPagesCount] = useState<number>(0);
  setElementsCount(props.episodes.length);
  

  const {elementsPerPage} = useTypedSelector(state => state.carouselBlockReducer);
  const dispatchPage = useDispatch();
  console.log(props.key);
  useEffect(() => {
    dispatchPage(findValueElementsPerPage(width, elementsCount));
  },[width])


  setPagesCount(getPages(elementsCount, elementsPerPage))
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
