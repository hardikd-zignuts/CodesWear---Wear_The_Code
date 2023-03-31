import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducer from "./reducer";


const middleware = [thunkMiddleware];
const Store = createStore(
    CartReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;