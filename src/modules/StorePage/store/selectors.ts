import { TRootState } from "./menuStore";

export const selectMenu = (state: TRootState) => state.menu.card;
export const selectCategory = (state: TRootState) => state.menu.categoryActive;
export const selectBasket = (state: TRootState) => state.menu.basket;
