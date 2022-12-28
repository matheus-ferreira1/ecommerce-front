import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SidebarProvider>
);
