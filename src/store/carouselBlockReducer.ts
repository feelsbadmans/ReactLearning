import { THREE_IN_PAGE, TWO_IN_PAGE, ONE_IN_PAGE } from "../types/reduxTypes";


const initialState = {
    elementsPerPage: 3
}; 


const elementsPerPageReducer = (state = initialState, action : any) => {
   
    switch(action.type){
        case THREE_IN_PAGE: return {
            elementsPerPage:3
        }
        case TWO_IN_PAGE: return {
            elementsPerPage:2
        }
        case ONE_IN_PAGE: return {
            elementsPerPage:1
        }
    default: return state;
    }
}

export default elementsPerPageReducer;