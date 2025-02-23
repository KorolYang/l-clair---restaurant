import { useEffect } from "react";
import { appStore } from "../store/store";
import { selectUser } from "../store/auth/selectors";
import { useStoreSelector } from "./useStoreSelector";

export const useTheme = () => {
  const { theme } = useStoreSelector(appStore, selectUser);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return { theme };
};
