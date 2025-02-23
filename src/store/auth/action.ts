import { TGetUser } from "./types";

export const login = (payload: TGetUser) => ({ type: "LOGIN", payload });
export const logOut = () => ({ type: "LOGOUT" });
export const changeTheme = () => ({ type: "CHANGE_THEME" });
