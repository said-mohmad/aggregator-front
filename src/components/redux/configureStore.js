import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { application } from "./features/application";
import services from "./features/carts";

export const store = createStore(
  combineReducers({application, services}),
  
  composeWithDevTools(applyMiddleware(thunk))
);
