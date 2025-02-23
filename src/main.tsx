import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import { AppStoreProvider } from "./app/provider/AppStoreProvider.tsx";
import { MenuStoreProvider } from "./app/provider/MenuStoreProvider.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AppStoreProvider>
      <MenuStoreProvider>
        <App />
      </MenuStoreProvider>
    </AppStoreProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
);
