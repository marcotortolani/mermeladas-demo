import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app.jsx";
import "./index.css";

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(application, document.getElementById("app"));
