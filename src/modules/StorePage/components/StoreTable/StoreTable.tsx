import { useRef, useEffect } from "react";
import { Card } from "../Card/Card";
import { TProduct } from "../../store/reducer";
import { selectBasket, selectCategory, selectMenu } from "../../store/selectors";
import { useStoreSelector } from "../../../../hooks/useStoreSelector";
import { menuStore } from "../../store/menuStore";
import "./StoreTable.scss";

export const StoreTable = () => {
  console.log("render list");
  const menu = useStoreSelector(menuStore, selectMenu);
  const category = useStoreSelector(menuStore, selectCategory);
  const filteredMenu =
    category === "все" ? menu : menu.filter((card: TProduct) => card.category === category);

  const basket = useStoreSelector(menuStore, selectBasket);
  const isMounted = useRef(false);

  const inBasket = (id: string) => {
    return !!basket.find((item) => item.id === id);
  };

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(basket);
      localStorage.setItem("basket", json);
    }
    isMounted.current = true;
  }, [basket]);

  return (
    <div className="table">
      {filteredMenu?.map((card: TProduct) => (
        <Card key={card.id} product={card} inBasket={inBasket(card.id)} />
      ))}
    </div>
  );
};
