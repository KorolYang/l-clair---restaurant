import Cookie from "js-cookie";
import jwt from "jsonwebtoken";
import { TGetUser } from "../store/auth/types";

export const setToken = (data: TGetUser) => {
  const accTknData = {
    id: data.id,
    password: data.password,
    userName: data.userName,
  };
  const accTkn = jwt.sign(accTknData, import.meta.env.VITE_SECRET_KEY, {
    expiresIn: 60 * 30,
  });
  Cookie.set("accTkn", accTkn);
};
