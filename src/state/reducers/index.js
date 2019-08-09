import {combineReducers} from "redux";
import carsReducer from "./carsReducer";
import colorReducer from "./colorReducer";
import manufacturerReducer from "./manufacturerReducer";

export default combineReducers({
  carsInfo: carsReducer,
  colors: colorReducer,
  manufacturers: manufacturerReducer,
})
