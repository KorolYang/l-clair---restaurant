import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoreSelector } from "@/hooks/useStoreSelector";
import { menuStore } from "../StorePage/store/menuStore";
import { selectMenu } from "../StorePage/store/selectors";
import { Button } from "@/ui/Button/Button";
import "./ProductPage.scss";

export const ProductPage: FC = () => {
  const menu = useStoreSelector(menuStore, selectMenu);
  const navigate = useNavigate();
  const { id } = useParams();
  const product = menu.find((item) => item.id === id);
  console.log(id, "current id");
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="product">
      <div className="product__pic">
        <img src={product?.picture} alt="product-picture" />
      </div>
      <Button onClick={goBack} className="product__go-back-btn" text="Назад" />
      <div className="product__info">
        <p>{product?.name}</p>
        <p>{product?.description}</p>
        <p>Цена: {product?.price}</p>
      </div>
    </div>
  );
};
