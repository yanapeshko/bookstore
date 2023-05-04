import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import bookReducer from "./redux/reducers/bookReducer";
import App from "./components/App/App";

const store = createStore(bookReducer);

const root = document.getElementById("root");

if (root) {
  const render = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  const rootElement = (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

  const rootRender = ReactDOM.createRoot(root);
  rootRender.render(rootElement);
}
