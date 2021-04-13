import { THREE, TWO, ONE } from "../types/reduxTypes";


const initialState = {
    elementsPerPage: 3
}; 


const elementsPerPageReducer = (state = initialState, action : any) => {
   
    switch(action.type){
        case THREE: return {
            elementsPerPage:3
        }
        case TWO: return {
            elementsPerPage:2
        }
        case ONE: return {
            elementsPerPage:1
        }
    default: return state;
    }
}

export default elementsPerPageReducer;