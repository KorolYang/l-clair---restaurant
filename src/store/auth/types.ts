import { NavigateFunction } from "react-router-dom";

export type TGetUserProps = {
  userName: string;
  password: string;
  navigate: NavigateFunction;
};

export type TUserAuth = {
  userName: string;
  password: string;
};

export type TPatchTheme = {
  id: string;
  theme: string;
};

export type TPostUser = {
  userName: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
};

export interface TGetUser {
  id: string;
  userName: string;
  password: string;
  theme: "light" | "dark";
  name: string;
  surname: string;
  phone: string;
  email: string;
}

export type TUserIsAuthProps = {
  data: TGetUser[];
  userName: string;
  password: string;
};
