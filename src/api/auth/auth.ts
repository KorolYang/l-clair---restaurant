import { AxiosInstance } from "axios";
import { TPostUser } from "../../store/auth/types";

export const auth = (instance: AxiosInstance) => ({
  getUser() {
    return instance({
      method: "GET",
      url: "user",
    });
  },
  getUserByID(id: string) {
    return instance({
      method: "GET",
      url: `user/${id}`,
    });
  },
  postUser(data: TPostUser) {
    return instance({
      method: "post",
      url: "user",
      data: {
        userName: data.userName,
        password: data.password,
        theme: "light",
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        email: data.email,
      },
    });
  },
});
