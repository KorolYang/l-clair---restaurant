import Cookie from "js-cookie";
import { Suspense, useEffect } from "react";
import jwt from "jsonwebtoken";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { ErrorPage } from "../modules/ErrorPage/ErrorPage";
import { pathRoutes } from "./routes/pathRoutes";
import Basket from "../modules/BasketPage/BasketPage";
import Profile from "../modules/ProfilePage/ProfilePage";
import OrderPage from "../modules/OrderPage/OrderPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { appStore } from "../store/store";
import { logOut } from "../store/auth/action";
import { useStoreDispatch } from "../hooks/useStoreDispatch";
import MainPage from "../modules/MainPage/MainPage";
import { getUserByID } from "../store/auth/asyncAction";
import { StorePageAsync } from "../modules/StorePage/StorePage.async";
import { PreLoader } from "../ui/PreLoader/PreLoader";
import { ProductPage } from "@/modules/ProductPage/ProductPage";

function App() {
  const dispatch = useStoreDispatch(appStore);

  useEffect(() => {
    const token = Cookie.get("accTkn") || "";
    try {
      const decode = jwt.verify(token, import.meta.env.VITE_SECRET_KEY);
      if (typeof decode === "object") {
        dispatch(getUserByID(decode.id));
      }
    } catch (error) {
      dispatch(logOut());
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={pathRoutes.main} element={<Layout />}>
          <Route path={pathRoutes.login} element={<PublicRoute />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path={pathRoutes.main} element={<PrivateRoute />}>
            <Route path={pathRoutes.orders} element={<OrderPage />} />
            <Route path={pathRoutes.basket} element={<Basket />} />
            <Route path={pathRoutes.profile} element={<Profile />} />
            <Route path={pathRoutes.product} element={<ProductPage />} />
            <Route
              path={pathRoutes.store}
              element={
                <Suspense fallback={<PreLoader />}>
                  <StorePageAsync />
                </Suspense>
              }
            />
            <Route
              index
              element={
                <Suspense fallback={<PreLoader />}>
                  <StorePageAsync />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
