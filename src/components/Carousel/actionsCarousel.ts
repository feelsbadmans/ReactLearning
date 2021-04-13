import { ONE_PER_PAGE, THREE_PER_PAGE, TWO_PER_PAGE } from "../../types/reduxTypes";


export const findValueElementsPerPage = (width : number, elementsCount : number) => {
    return (dispatch : any) => {
        if (width > 1400) dispatch({
            type:THREE_PER_PAGE,
            payload:{
                elementsCount : elementsCount
            }
        });
        else if (width <= 1400 && width > 700) dispatch({
            type:TWO_PER_PAGE,
            payload:{
                elementsCount : elementsCount
            }
        }); 
        else if (width)dispatch({
            type:ONE_PER_PAGE,
            payload:{
                elementsCount : elementsCount
            }
        });
    }
   
}