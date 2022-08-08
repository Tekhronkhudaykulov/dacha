import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composeEnhancer);
export default store;
