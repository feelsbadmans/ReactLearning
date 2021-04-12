import React, { useState, useEffect } from "react";
import SeasonBlock from "./SeasonBlock/SeasonBlock";
import "./index.css";


function App(){
  const [ListEpisodes, setListEpisodes] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "https://breakingbadapi.com/api/episodes?series=Breaking+Bad";
    async function fetchData(){
      const response = await fetch(url);
      const data = await response.json();
      setListEpisodes(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {Loading ? (
        <h1>
          Loading...
        </h1>
      ) : (
        <SeasonBlock data={ListEpisodes}></SeasonBlock>
      )}
    </div>
  );
}

export default App;
