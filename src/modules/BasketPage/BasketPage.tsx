import { Link } from "react-router-dom";
import "./BasketPage.scss";
import { BasketTable } from "./components/BasketTable/BasketTable";

export const BasketPage = () => {
  console.log("render basket");
  return (
    <>
      <div className="basket__header">
        <h2 className="basket__title">Корзина</h2>
        <Link className="basket__link" to={"/main/store"}>
          Вернутся В магазин
        </Link>
      </div>
      <BasketTable />
    </>
  );
};

export default BasketPage;
