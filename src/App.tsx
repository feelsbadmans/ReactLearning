import SeasonBlock from "./SeasonBlock/SeasonBlock";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";
import { FETCH_DATA_START } from "./Redux/reduxTypes";
import { FC, useEffect } from "react";
import { loadingDataState } from "./Redux/loadingDataReducer";


const App: FC = () =>{
  const dispatch = useDispatch();

  const { listEpisodes, loading, error} = useSelector(
    (state : any) => ({
      listEpisodes: state.loadingDataReducer.listEpisodes,
      loading: state.loadingDataReducer.loading,
      error: state.loadingDataReducer.error
    })
  );

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
