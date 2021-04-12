import { ONE, THREE, TWO } from "./reduxTypes";

export function findValueElementsPerPage(width : number){
    if (width > 1400) return {type:THREE};
    if (width <= 1400 && width > 700) return {type:TWO}; 
    return {type:ONE};
}