import {SORT_SELECTED} from "../actions/actions-types";

export default function pageSelectedReducer(state = {}, action){
  switch(action.type){
    case SORT_SELECTED:
      if(action.payload !== undefined){
        return action.payload;
      }

      return state;

    default: 
       return state;
  }
}
