import MainReducer from "./MainReducer";
const { createStore, combineReducers } = require("redux");

const comAllReducer = combineReducers({
  appStore: MainReducer,
});

const Store = createStore(comAllReducer);

export default Store;
