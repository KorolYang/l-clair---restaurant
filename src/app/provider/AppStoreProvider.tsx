import React, { createContext } from "react";
import { Store } from "redux";
import { appStore } from "../../store/store";

const AppContext = createContext<Store | undefined>(undefined);

export const AppStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AppContext.Provider value={appStore}>{children}</AppContext.Provider>
);
