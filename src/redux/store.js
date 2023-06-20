import { legacy_createStore as createStore } from "redux";
import reducers from "./reduces/index";
// const stores = createStore (reducers);

export const stores = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const stores = reducers;
