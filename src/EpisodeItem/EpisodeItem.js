import React from "react";
import "../index.css";

function EpisodeItem(props) {
  return (
    <div className="episode">
      <h2>{props.episode.title}</h2>
      <h3>Air Date - {props.episode.air_date}</h3>
      <h4>Characters</h4>
      {props.episode.characters.map((person) => {
        return <p>{person}</p>;
      })}
    </div>
  );
}

export default EpisodeItem;
