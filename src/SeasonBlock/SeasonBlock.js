import React from "react";
import Carousel from "../Carousel/Carousel";
import "../index.css";

function SeasonBlock(props) {
  let seasonNums = props.data
    .map((el) => el.season.replace(/\s/g, ""))
    .filter((value, index, self) => self.indexOf(value) === index);
  return (
    <div>
      {seasonNums.map((season) => {
        return (
          <div className="box">
            <h1>Season {season}</h1>
            <Carousel
              episodes={props.data.filter((elem) => elem.season === season)}
              key = {season}
            ></Carousel>
          </div>
        );
      })}
    </div>
  );
}

export default SeasonBlock;
