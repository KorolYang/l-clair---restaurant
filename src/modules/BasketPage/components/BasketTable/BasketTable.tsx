import { useRef, useEffect } from "react";
import { TBasketItem } from "../../../StorePage/store/reducer";
import { BasketCard } from "../BasketCard/BasketCard";
import { useStoreDispatch } from "../../../../hooks/useStoreDispatch";
import { useStoreSelector } from "../../../../hooks/useStoreSelector";
import { login } from "../../../../store/auth/action";
import { selectUser } from "../../../../store/auth/selectors";
import { appStore } from "../../../../store/store";
import { calcTotalPrice } from "../../../../utils/utils";
import { fetchOrder } from "../../../StorePage/store/asyncAction";
import { menuStore } from "../../../StorePage/store/menuStore";
import { selectBasket } from "../../../StorePage/store/selectors";
import { Button } from "../../../../ui/Button/Button";
import "./BasketTable.scss";

export const BasketTable = () => {
  console.log("reder basket list");
  const basket = useStoreSelector(menuStore, selectBasket);
  const user = useStoreSelector(appStore, selectUser);
  const menuDispatch = useStoreDispatch(menuStore);
  const appDispatch = useStoreDispatch(appStore);

  const isMounted = useRef(false);

  const totalPrice = calcTotalPrice(basket);

  const handlerCreateOrder = () => {
    if (basket.length !== 0) {
      const newOrder = {
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        totalPrice,
        basket,
        dateCreate: new Date().toLocaleString(),
        id: Math.floor(100000 + Math.random() * 900000).toString(),
      };

      const fetchData = {
        ...user,
        order: [...user.order, newOrder],
      };

      menuDispatch(fetchOrder(user.id, fetchData)).then((res) => {
        appDispatch(login(res));
      });
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(basket);
      localStorage.setItem("basket", json);
    }
    isMounted.current = true;
  }, [basket]);
  return (
    <div className="order-list">
      <div className="basket-item">
        {basket.map((product: TBasketItem) => (
          <BasketCard key={product.id} product={product} />
        ))}
      </div>
      <div className="order-info">
        <h3 className="order-info__title">Заказ</h3>
        <div className="order-info__total-price">
          <p>Итого:</p>
          <p>{totalPrice}</p>
        </div>
        <Button onClick={handlerCreateOrder} className="order-info__btn" text="Оформить заказ" />
      </div>
    </div>
  );
};
