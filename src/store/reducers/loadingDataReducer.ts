import { FETCH_DATA_ERROR, FETCH_DATA_START, FETCH_DATA_SUCCESS} from "../../types/reduxTypes";



const initialState = {
    loading: false,
    listEpisodes: [],
    error: null
};


const loadingDataReducer = (state = initialState, action : any) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                loading:true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                error: null,
                listEpisodes:[...state.listEpisodes, action.payload]
            }
        case FETCH_DATA_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default loadingDataReducer;
