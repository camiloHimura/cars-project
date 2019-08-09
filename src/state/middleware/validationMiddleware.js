import {ADD_TAG} from "../actions/actions-types";
import {invalidTag} from "../actions";

export default function validationMiddleware({ dispatch }){
    return function(next){
        return function(action){

            return next(action);
        }
    }
}