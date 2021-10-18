import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from './routes';
import store from "./store";

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
      <App>
        <Routes />
      </App>
  </Provider>,
  document.querySelector("#root")
);
