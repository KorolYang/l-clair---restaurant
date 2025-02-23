import { TBasketItem, TCategory, TProduct } from "./reducer";

export type PayloadVariants = TProduct | TCategory | TBasketItem | string;
export const getMenu = (payload: TProduct) => ({ type: "GET_MENU", payload });
export const pickCategory = (payload: TCategory) => ({ type: "PICK_CATEGORY", payload });
export const addProduct = (payload: TProduct) => ({ type: "ADD_PRODUCT", payload });
export const deleteProduct = (payload: string) => ({ type: "DELETE_PRODUCT", payload });
export const increaseCount = (payload: TBasketItem) => ({ type: "INCREASE_COUNT", payload });
export const decreaseCount = (payload: TBasketItem) => ({ type: "DECREASE_COUNT", payload });
export const deleteBasket = () => ({ type: "DELETE_BASKET" });
