import { TBasketItem } from "../modules/StorePage/store/reducer";

export const getCartFromLS = () => {
  const data = localStorage.getItem("basket");
  const items = data ? JSON.parse(data) : [];

  return items as TBasketItem[] | [];
};

export const calcTotalPrice = (items: TBasketItem[]) => {
  return items.reduce((sum, obj) => Number(obj.price) * obj.count + sum, 0);
};
