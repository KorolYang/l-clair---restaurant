import { AxiosInstance } from "axios";
import { TUser } from "../../store/auth/reducer";

export const user = (instance: AxiosInstance) => ({
  editUserByID(id: string, data: TUser) {
    return instance({
      method: "PUT",
      url: `user/${id}`,
      data,
    });
  },
  createOrder(id: string, data: TUser) {
    return instance({
      method: "PUT",
      url: `user/${id}`,
      data,
    });
  },
  deleteOrder(id: string, data: TUser) {
    return instance({
      method: "PUT",
      url: `user/${id}`,
      data,
    });
  },
  deleteUser(id: string) {
    return instance({
      method: "DELETE",
      url: `user/${id}`,
    });
  },
});
