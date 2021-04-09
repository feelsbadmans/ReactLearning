import React, { useState } from "react";
import EpisodeBlock from "../EpisodeBlock/EpisodeBlock";
import "../index.css";

function Carousel(props) {
  const elementsCount = props.episodes.length;
  let pagesCount = 0;
  elementsCount % 3 === 0
    ? (pagesCount = Math.floor(elementsCount / 3))
    : (pagesCount = Math.floor(elementsCount / 3) + 1);

  let episodesGroups = [];
  for (let i = 0; i < pagesCount; i++) {
    episodesGroups.push(props.episodes.slice(i * 3, (i + 1) * 3));
  }
  if (pagesCount * 3 !== elementsCount) {
    episodesGroups.push(props.episodes.slice(pagesCount * 3, elementsCount));
  }

  const [X, setX] = useState(0);

  const goPrev = () => {
    X === 0 ? setX(pagesCount * -143 + 143) : setX(X + 143);
  };
  const goNext = () => {
    X === pagesCount * -143 + 143 ? setX(0) : setX(X - 143);
  };

  return (
    <div className="carousel-box">
      {episodesGroups.map((episodes, index) => {
        return (
          <EpisodeBlock episodes={episodes} key={index} X={X}></EpisodeBlock>
        );
      })}
      <button className="default-button" id="go-prev" onClick={goPrev}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button className="default-button" id="go-next" onClick={goNext}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Carousel;
