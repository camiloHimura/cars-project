import {PAGE_SELECTED, SET_PAGE_SELECTED} from "../actions/actions-types";

export default function pageSelectedReducer(state = 1, action){
  switch(action.type){
    case PAGE_SELECTED:
      return state;
    
    case SET_PAGE_SELECTED:
      if(Number.isInteger(action.payload)){
        return action.payload;
      }

      return state;

    default: 
       return state;
  }
}
