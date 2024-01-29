import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ShopContextProvider } from "./context/ShopContext.jsx";
import { Layout } from "./components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <Router>
        <Layout>
          <App />
        </Layout>
      </Router>
    </ShopContextProvider>
  </React.StrictMode>
);
