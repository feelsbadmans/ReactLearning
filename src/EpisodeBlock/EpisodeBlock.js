import React, { useState } from "react";
import EpisodeItem from "../EpisodeItem/EpisodeItem";
import "../index.css";

function EpisodeBlock(props) {
  console.log(props.X);
  return (
    <div
      className="episodes-box"
      style={{ transform: `translateX(${props.X}%)` }}
    >
      {props.episodes.map((episode) => {
        return (
          <EpisodeItem episode={episode} key={episode.episode_id}></EpisodeItem>
        );
      })}
    </div>
  );
}

export default EpisodeBlock;
