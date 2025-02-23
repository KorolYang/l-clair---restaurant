import { TOrder } from "../../modules/StorePage/store/reducer";

export type TUser = {
  userName: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  id: string;
  theme: "dark" | "light";
  order: TOrder[];
};

export interface TAuthState {
  isAuth: boolean;
  user: TUser;
}

const initialState: TAuthState = {
  isAuth: false,
  user: {
    userName: "",
    password: "",
    theme: "light",
    name: "",
    surname: "",
    phone: "",
    email: "",
    id: "",
    order: [],
  },
};

export const userReduser = (state: TAuthState = initialState, action: any): TAuthState => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        isAuth: true,
        user: {
          ...state.user,
          userName: action.payload.userName,
          password: action.payload.password,
          theme: action.payload.theme,
          name: action.payload.name,
          surname: action.payload.surname,
          phone: action.payload.phone,
          email: action.payload.email,
          id: action.payload.id,
          order: action.payload.order,
        },
      };
    }
    case "LOGOUT": {
      return initialState;
    }
    case "CHANGE_THEME":
      return {
        ...state,
        user: {
          ...state.user,
          theme:
            state.user.theme === "light"
              ? (state.user.theme = "dark")
              : (state.user.theme = "light"),
        },
      };
    default:
      return state;
  }
};
