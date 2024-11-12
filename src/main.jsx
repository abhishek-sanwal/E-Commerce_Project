import "./index.css";
import "./app.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShopContextProvider } from "./contexts/ShopContextProvider.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
