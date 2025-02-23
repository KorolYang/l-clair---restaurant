import React, { createContext } from "react";
import { Store } from "redux";
import { menuStore } from "../../modules/StorePage/store/menuStore";

const MenuContext = createContext<Store | undefined>(undefined);

export const MenuStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MenuContext.Provider value={menuStore}>{children}</MenuContext.Provider>
);
