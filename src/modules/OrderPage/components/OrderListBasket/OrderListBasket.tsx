import { FC } from "react";
import { TBasketItem } from "@/modules/StorePage/store/reducer";
import "./OrderListBasket.scss";

export const OrderListBasket: FC<{ basket: TBasketItem[] }> = ({ basket }) => {
  return (
    <ul className="product__list">
      {basket?.map((product: TBasketItem) => (
        <li key={product.id}>
          {product.name} x {product.count}
        </li>
      ))}
    </ul>
  );
};
