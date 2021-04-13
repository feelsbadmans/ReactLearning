import { THREE, TWO, ONE } from "../../types/reduxTypes";


export function findValueElementsPerPage(width : number, elementsCount : number){
    return (dispatch : any) => {
        if (width > 1400) dispatch({
            type:THREE,
            payload:{
                elementsCount : elementsCount
            }
        });
        else if (width <= 1400 && width > 700) dispatch({
            type:TWO,
            payload:{
                elementsCount : elementsCount
            }
        }); 
        else if (width)dispatch({
            type:ONE,
            payload:{
                elementsCount : elementsCount
            }
        });
    }
   
}