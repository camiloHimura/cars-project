import {COLORS_LOADED} from "../actions/actions-types";

export default function carsReducer(state = [], action){
  switch(action.type){
    case COLORS_LOADED:
      return [...action.payload];

    default: 
       return state;
  }

}
