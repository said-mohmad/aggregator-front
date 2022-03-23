import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { application } from "./features/application";
import services from "./features/services";

export const store = createStore(
  combineReducers({ application, services }),
  composeWithDevTools(applyMiddleware(thunk))
);
