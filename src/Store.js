import {Platform} from "react-native";
import {createStore, compose, applyMiddleware} from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger"

const middleware = applyMiddleware(thunk, promise, logger);
const store = createStore("REDUCERS", compose(middleware));

export default store;