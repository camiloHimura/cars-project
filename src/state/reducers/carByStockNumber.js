import {CAR_BY_STOCK_NUMBER_LOADED, CAR_BY_STOCK_NUMBER_ISFAVORITE} from "../actions/actions-types";

export default function carByStockNumber(state = {}, action){
  switch(action.type){
    case CAR_BY_STOCK_NUMBER_LOADED:
      return Object.assign({}, state, action.payload);
    
    case CAR_BY_STOCK_NUMBER_ISFAVORITE:
      return Object.assign({}, state, {isFavorite: action.payload});

    default: 
       return state;
  }

}
