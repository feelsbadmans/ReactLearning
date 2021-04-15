import SeasonBlock from "../SeasonBlock/SeasonBlock";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actionsApp";
import { FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const App: FC = () =>{
  const dispatch = useDispatch();

  const { listEpisodes, loading, error} = useTypedSelector(state => state.loadingDataReducer);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  if (loading){
    return (
        <h1>
          Loading...
        </h1>
    );
  }

  if (error){
    return (
      <h1>
        Error: {error}
      </h1>
  );
  }
  return (
    <SeasonBlock data={listEpisodes[0]}></SeasonBlock>
  );
}

export default App;
