import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers";
import ReduxThunk from "redux-thunk"
import {validationMiddleware} from "../middleware"

const store = createStore(
    rootReducer,
    applyMiddleware(validationMiddleware, ReduxThunk)
);

export default store;
