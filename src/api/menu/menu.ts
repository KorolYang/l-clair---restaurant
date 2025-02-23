import { AxiosInstance } from "axios";

export const menu = (instance: AxiosInstance) => ({
  getMenu() {
    return instance({
      method: "GET",
      url: "menu",
    });
  },
});
