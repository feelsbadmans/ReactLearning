import { THREE_IN_PAGE, TWO_IN_PAGE, ONE_IN_PAGE } from "../../types/reduxTypes";


export function findValueElementsPerPage(width : number, elementsCount : number){
    return (dispatch : any) => {
        if (width > 1400) dispatch({
            type:THREE_IN_PAGE,
            payload:{
                elementsCount : elementsCount
            }
        });
        else if (width <= 1400 && width > 700) dispatch({
            type:TWO_IN_PAGE,
            payload:{
                elementsCount : elementsCount
            }
        }); 
        else if (width)dispatch({
            type:ONE_IN_PAGE,
            payload:{
                elementsCount : elementsCount
            }
        });
    }
   
}