import React from "react";
import App from "./App.js";
import "./style.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));