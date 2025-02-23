interface TThemeState {
  theme: "light" | "dark";
}

interface TActionTheme {
  type: "CHANGE_THEME" | "USER_THEME";
  payload: "light" | "dark";
}

const initialState: TThemeState = {
  theme: "light",
};

export const themeReducer = (state = initialState, action: TActionTheme): TThemeState => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { theme: state.theme === "light" ? (state.theme = "dark") : (state.theme = "light") };
    case "USER_THEME":
      return { theme: action.payload };
    default:
      return state;
  }
};
