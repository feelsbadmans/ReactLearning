import React from "react";
import Carousel from "../Carousel/Carousel";
import "../../index.css";
import { PropsSeasonBlock } from "../../types/interfaces";


function SeasonBlock(props : PropsSeasonBlock) {
  let seasonNums = [], propsData :Array<any> = [];
  if (typeof(props.data) === 'object') {
    propsData = Object.values(props.data);
    seasonNums = propsData.map((el : any) => el.season.replace(/\s/g, ""))
    .filter((value, index, self) => self.indexOf(value) === index);
  }
    
  return (
    <div>
      {seasonNums.map((season) => {
        return (
          <div className="box">
            <h1>Season {season}</h1>
            <Carousel
              episodes={propsData.filter((elem : any) => elem.season === season)}
              key = {season}
            ></Carousel>
          </div>
        );
      })}
    </div>
  );
}

export default SeasonBlock;

