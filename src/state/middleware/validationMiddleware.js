import {FILTERS_SELECTED} from "../actions/actions-types";
import {setPage} from "../actions";

export default function validationMiddleware({dispatch}){
  return function(next){
    return function(action){
      if(action.type === FILTERS_SELECTED){
        dispatch(setPage(1))
      }

      return next(action);
    }
  }
}