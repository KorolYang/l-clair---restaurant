import axios from "axios";
import { toast } from "react-toastify";

export const errorHandler = (e: unknown) => {
  if (axios.isAxiosError(e)) {
    toast.error(`${e.message}`);
  } else {
    const errMessage =
      typeof e === "object" && e !== null && "message" in e && typeof e.message === "string"
        ? e.message
        : "Что-то пошло не так";

    toast.error(`Ошибка при получении данных. ${errMessage}`);
  }
};
