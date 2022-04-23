import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./animate.min.css";
import App from "./App";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
