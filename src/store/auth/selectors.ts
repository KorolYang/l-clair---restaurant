import { TRootState } from "../store";

export const selectAuth = (state: TRootState) => state.auth;

export const selectIsAuth = (state: TRootState) => state.auth.isAuth;
export const selectUser = (state: TRootState) => state.auth.user;
export const selectOrder = (state: TRootState) => state.auth.user.order;
export const selectTheme = (state: TRootState) => state.auth.user.theme;
