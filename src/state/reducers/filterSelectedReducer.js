import {FILTERS_SELECTED} from "../actions/actions-types";
const initialState = {manufacturer: false, color: false};

export default function selectedFiltersReducer(state = initialState, action){
  switch(action.type){
    case FILTERS_SELECTED:
      return Object.assign({}, state, action.payload);

    default: 
       return state;
  }

}
