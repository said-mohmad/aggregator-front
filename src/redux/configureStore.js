import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { application } from "./features/application";
import services from "./features/services";
import categories from './features/categories'
import { organization } from "./features/organization";
import { editRemove } from "./features/editRemove";
import { addService } from "./features/addService";
import { oneServise } from "./features/oneServise";
import { orders } from "./features/orders";

export const store = createStore(
  combineReducers({ application, services, categories, organization, editRemove, addService, orders, oneServise }),
  composeWithDevTools(applyMiddleware(thunk))
);
