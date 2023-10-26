import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="max-w-[1440px] w-screen h-screen m-auto font-poppins overflow-x-hidden">
      <App />
    </main>
  </React.StrictMode>
);
