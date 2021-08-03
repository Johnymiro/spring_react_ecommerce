import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducer";

const dev =
  !process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === "development";

const configureStore = (initialState, crudApi) => {
  const middlewares = [thunk.withExtraArgument(crudApi)];

  const composeEnhancers =
    dev &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const enhacer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(appReducer, initialState, enhacer);
};

export default configureStore;
