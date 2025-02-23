import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { deleteBasket, getMenu } from "./action";
import { API } from "../../../api";
import { TUser } from "../../../store/auth/reducer";
import { errorHandler } from "../../../utils/errorHandler";

export const fetchMenu = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await API.menu.getMenu();
      dispatch(getMenu(data));
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const fetchOrder = (id: string, data: TUser) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.user.createOrder(id, data);
      toast.success("Успешно!");
      localStorage.removeItem("basket");
      dispatch(deleteBasket());
      return response.data;
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const deleteOrder = (id: string, data: TUser) => {
  return async () => {
    try {
      const response = await API.user.deleteOrder(id, data);
      toast.success("Успешно!");
      return response.data;
    } catch (error) {
      errorHandler(error);
    }
  };
};
