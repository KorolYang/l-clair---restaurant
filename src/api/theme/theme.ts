import { AxiosInstance } from "axios";

export const theme = (instance: AxiosInstance) => ({
  putTheme(id: string, theme: string) {
    return instance({
      method: "PUT",
      url: `user/${id}`,
      data: { theme: theme === "light" ? "dark" : "light" },
    });
  },
});
