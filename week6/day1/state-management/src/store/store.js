import { createStore } from "redux";
import rootReducer from "../reducers/rootRecuder"

const store = createStore(
    rootReducer
    // reducer
);

export default store;