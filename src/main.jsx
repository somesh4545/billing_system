import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <main className="max-w-[1440px] w-screen h-screen m-auto font-poppins overflow-x-hidden">
      <App />
    </main>
  </Provider>
);
