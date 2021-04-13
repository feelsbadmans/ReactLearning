import React from "react";
import EpisodeItem from "../EpisodeItem/EpisodeItem";
import "../../index.css";
import { PropsEpisodeBlock } from "../../types/interfaces";


const EpisodeBlock = (props : PropsEpisodeBlock) => {
  return (
    <div
      className="episodes-box"
      style={{ transform: `translateX(${props.X}%)` }}
    >
      {props.episodes.map((episode : any) => {
        return (
          <EpisodeItem episode={episode}></EpisodeItem>
        );
      })}
    </div>
  );
}

export default EpisodeBlock;
