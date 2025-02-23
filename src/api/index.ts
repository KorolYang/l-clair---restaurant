import axios from "axios";
import Cookie from "js-cookie";
import { auth } from "./auth/auth";
import { theme } from "./theme/theme";
import { user } from "./createUser/postUser";
import { menu } from "./menu/menu";
import { isAuthenticated } from "../utils/auth";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookie.get("accTkn");
    if (token && isAuthenticated()) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      Cookie.remove("accTkn");
      window.location.href = "/login";
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export const API = {
  auth: auth(authInstance),
  theme: theme(instance),
  user: user(instance),
  menu: menu(instance),
};
