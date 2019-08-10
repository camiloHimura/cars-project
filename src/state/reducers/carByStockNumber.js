import {CAR_BY_STOCK_NUMBER_LOADED} from "../actions/actions-types";

export default function carByStockNumber(state = {}, action){
  switch(action.type){
    case CAR_BY_STOCK_NUMBER_LOADED:
      return Object.assign({}, state, action.payload);

    default: 
       return state;
  }

}
