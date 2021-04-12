import { ONE, THREE, TWO } from "./reduxTypes";

export function elementsPerPageReducer(state : number, action : any){
    switch(action.type){
        case THREE: return 3;
        case TWO: return 2;
        case ONE: return 1;
    default: return state;
    }
}