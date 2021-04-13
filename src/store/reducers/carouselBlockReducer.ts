import { THREE_PER_PAGE, TWO_PER_PAGE, ONE_PER_PAGE } from "../../types/reduxTypes";


const initialState = {
    elementsPerPage: 3
}; 


const elementsPerPageReducer = (state = initialState, action : any) => {
   
    switch(action.type){
        case THREE_PER_PAGE: return {
            elementsPerPage:3
        }
        case TWO_PER_PAGE: return {
            elementsPerPage:2
        }
        case ONE_PER_PAGE: return {
            elementsPerPage:1
        }
    default: return state;
    }
}

export default elementsPerPageReducer;