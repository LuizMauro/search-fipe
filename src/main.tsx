import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
