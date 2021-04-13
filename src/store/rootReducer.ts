import { combineReducers } from "redux";
import loadingDataReducer from "./loadingDataReducer";
import carouselBlockReducer from "./carouselBlockReducer"


const rootReducer = combineReducers({
    loadingDataReducer,
    carouselBlockReducer
})

export type RootState= ReturnType<typeof rootReducer>;

export default rootReducer;