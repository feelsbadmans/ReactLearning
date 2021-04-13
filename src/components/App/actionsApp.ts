import { FETCH_DATA_ERROR, FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../../types/reduxTypes";
import axios from 'axios';

export const fetchData = () => {
    return (dispatch : any)  => {
        dispatch(fetchDataStart());
        const url = "https://breakingbadapi.com/api/episodes?series=Breaking+Bad";
        axios
        .get(url)
        .then(response => {
            dispatch(fetchDataSuccess(response.data));
        })
        .catch(error => dispatch(fetchDataError(error.message)));
    }
}

const fetchDataStart = () => ({
    type: FETCH_DATA_START
})

const fetchDataSuccess = (data : any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: {
        ...data
    }
});

const fetchDataError = (error : any) => ({
    type: FETCH_DATA_ERROR,
    payload: {
        error
    }
});