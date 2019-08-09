import {MANUFACTURER_LOADED} from "../actions/actions-types";

export default function manufacturerReducer(state = [], action){
  switch(action.type){
    case MANUFACTURER_LOADED:
      return [...action.payload];

    default: 
       return state;
  }

}
