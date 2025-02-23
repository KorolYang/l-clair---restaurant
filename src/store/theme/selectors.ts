import { TRootState } from "../store";

export const selectTheme = (state: TRootState) => state.auth.user.theme;
