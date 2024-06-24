import { Route, Routes } from "react-router-dom";
import Layout from "./modules/Layout/Layout";
import "./index.scss";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import Basket from "./pages/Basket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="orders" element={<Orders />} />
          <Route path="basket" element={<Basket />} />
          <Route path="profile" element={<Profile />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
