import {PAGE_SELECTED} from "../actions/actions-types";

export default function pageSelectedReducer(state = 0, action){
  switch(action.type){
    case PAGE_SELECTED:
      if(Number.isInteger(action.payload)){
        return action.payload;
      }

      return state;

    default: 
       return state;
  }
}
