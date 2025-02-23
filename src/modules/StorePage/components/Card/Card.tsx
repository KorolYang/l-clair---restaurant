import { FC } from "react";
import { Link } from "react-router-dom";
import { menuStore } from "../../store/menuStore";
import { addProduct } from "../../store/action";
import { TProduct } from "../../store/reducer";
import { useStoreDispatch } from "../../../../hooks/useStoreDispatch";
import "./Card.scss";

export type TCardProps = {
  product: TProduct;
  inBasket: boolean;
};

export const Card: FC<TCardProps> = ({ product, inBasket }) => {
  const dispatch = useStoreDispatch(menuStore);

  const handlerAddProduct = () => {
    const productWithCount = { ...product, count: 1 };
    dispatch(addProduct(productWithCount));
  };

  return (
    <div className="card">
      <Link to={`/store/product/${product.id}`}>
        <div className="card__pic">
          <img src={product.picture} alt="" />
        </div>
      </Link>
      <div className="card__description">
        <h3 className="card__title">{product.name}</h3>
        <div className="card__price">
          <p>цена: {product.price}р</p>
        </div>
        {inBasket ? (
          <p className="card__add-btn">Товар в корзине</p>
        ) : (
          <button onClick={handlerAddProduct} className="card__add-btn">
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};
