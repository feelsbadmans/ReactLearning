export const getPages = (elementsCount:number, elementsPerPage : number) => {
    if ( elementsCount % elementsPerPage === 0){
      return Math.floor(elementsCount /elementsPerPage);
    } 
    else{
      return Math.floor(elementsCount /elementsPerPage) + 1;
    }
  }