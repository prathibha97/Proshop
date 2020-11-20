import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({});

const initailState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initailState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
