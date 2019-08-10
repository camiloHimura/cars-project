import {combineReducers} from "redux";
import carsReducer from "./carsReducer";
import colorReducer from "./colorReducer";
import carByStockNumber from "./carByStockNumber";
import manufacturerReducer from "./manufacturerReducer";
import pageSelectedReducer from "./pageSelectedReducer";
import filterSelectedReducer from "./filterSelectedReducer";
import sortSelectedReducer from "./sortSelectedReducer";

export default combineReducers({
  carByStockNumber,
  colors: colorReducer,
  carsInfo: carsReducer,
  pageSelected: pageSelectedReducer,
  sortSelected: sortSelectedReducer,
  manufacturers: manufacturerReducer,
  filterSelected: filterSelectedReducer,
})
