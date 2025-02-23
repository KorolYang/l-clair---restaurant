import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { API } from "../../api";
import { changeTheme, logOut, login } from "./action";
import { TGetUserProps, TPatchTheme, TPostUser } from "./types";
import { userIsAuth } from "../../utils/auth";
import { setToken } from "../../utils/jwtToken";
import { errorHandler } from "../../utils/errorHandler";
import { TUser } from "./reducer";
import { pathRoutes } from "../../app/routes/pathRoutes";

export const getUser = ({ userName, password, navigate }: TGetUserProps) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await API.auth.getUser();
      const user = userIsAuth({ data, userName, password });

      if (user) {
        setToken(user);
        dispatch(login(user));
        const redirectTo = sessionStorage.getItem("redirectAfterLogin") || pathRoutes.main;
        sessionStorage.removeItem("redirectAfterLogin");
        navigate(redirectTo);
      } else {
        toast.error("Неверное имя пользователя или пароль");
      }
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const getUserByID = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await API.auth.getUserByID(id);
      dispatch(login(data));
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const editUserByID = (id: string, data: TUser) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.user.editUserByID(id, data);
      toast.success("Успешно!");
      dispatch(login(response.data));
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const patchTheme = ({ id, theme }: TPatchTheme) => {
  return async (dispatch: Dispatch) => {
    try {
      await API.theme.putTheme(id, theme);
      dispatch(changeTheme());
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const postUser = (data: TPostUser, navigate: NavigateFunction) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.auth.postUser(data);
      setToken(response.data);
      dispatch(login(response.data));
      navigate("/");
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const deleteUser = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await API.user.deleteUser(id);
      dispatch(logOut());
    } catch (error) {
      errorHandler(error);
    }
  };
};
