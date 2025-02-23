import Cookie from "js-cookie";
import jwt from "jsonwebtoken";
import { TUserIsAuthProps, TGetUser, TUserAuth } from "../store/auth/types";

export function userIsAuth({ data, userName, password }: TUserIsAuthProps): TGetUser | null {
  const user = data.findIndex(
    (item: TUserAuth) => item.userName === userName && item.password === password,
  );
  if (user === -1) {
    return null;
  }
  return data[user];
}

export const isAuthenticated = () => {
  const token = Cookie.get("accTkn") || "";
  try {
    jwt.verify(token, import.meta.env.VITE_SECRET_KEY);
  } catch (error) {
    Cookie.remove("accTkn");
    return false;
  }
  return true;
};
