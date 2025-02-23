import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./app/App.tsx";
import { AppStoreProvider } from "./app/provider/AppStoreProvider.tsx";
import { MenuStoreProvider } from "./app/provider/MenuStoreProvider.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <HashRouter>
    <AppStoreProvider>
      <MenuStoreProvider>
        <App />
      </MenuStoreProvider>
    </AppStoreProvider>
  </HashRouter>,
  // </React.StrictMode>,
);
