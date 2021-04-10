import React, { useState } from "react";
import EpisodeItem from "../EpisodeItem/EpisodeItem";
import "../index.css";

interface PropsEpisodeBlock {
  episodes: Array<object>,
  key: number,
  X: number
}

function EpisodeBlock(props : PropsEpisodeBlock) {
  return (
    <div
      className="episodes-box"
      style={{ transform: `translateX(${props.X}%)` }}
    >
      {props.episodes.map((episode : any) => {
        return (
          <EpisodeItem episode={episode} key={episode.episode_id}></EpisodeItem>
        );
      })}
    </div>
  );
}

export default EpisodeBlock;
