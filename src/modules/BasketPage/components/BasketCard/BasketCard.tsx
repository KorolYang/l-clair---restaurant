import { FC } from "react";
import { TBasketItem } from "../../../StorePage/store/reducer";
import { menuStore } from "../../../StorePage/store/menuStore";
import { decreaseCount, deleteProduct, increaseCount } from "../../../StorePage/store/action";
import { useStoreDispatch } from "../../../../hooks/useStoreDispatch";
import "./BasketCard.scss";

export type TBasketCardProps = {
  product: TBasketItem;
};

export const BasketCard: FC<TBasketCardProps> = ({ product }) => {
  const dispatch = useStoreDispatch(menuStore);

  const handlerIncreaseCount = () => {
    dispatch(increaseCount(product));
  };
  const handlerDecreaseCount = () => {
    if (product.count === 1) {
      dispatch(deleteProduct(product.id));
    } else {
      dispatch(decreaseCount(product));
    }
  };
  const handlerDeleteProduct = () => {
    dispatch(deleteProduct(product.id));
  };
  return (
    <div className="basket-card">
      <div className="basket-card__pic">
        <img src={product.picture} alt="" />
      </div>
      <div className="basket-card__description">
        <h3 className="basket-card__title">{product.name}</h3>
        <div className="basket-card__price">
          <p>цена: {Number(product.price) * product.count}р</p>
        </div>
        <button onClick={handlerIncreaseCount} className="basket-card__add-btn">
          +
        </button>
        <p>{product.count}</p>
        <button onClick={handlerDecreaseCount} className="basket-card__delete-btn">
          -
        </button>
        <button onClick={handlerDeleteProduct} className="basket-card__delete-btn">
          удалить товар
        </button>
      </div>
    </div>
  );
};
