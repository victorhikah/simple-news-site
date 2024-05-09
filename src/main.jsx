import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./news_container/store.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
