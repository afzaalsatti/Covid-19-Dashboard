import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import MainPage from './components/Home/MainPage'
import rootReducer from "./reducers/rootReducer";
import Precautions from "./components/Preventions/Preventions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
