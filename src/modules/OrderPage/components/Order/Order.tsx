import { FC } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { TOrder } from "../../../StorePage/store/reducer";
import { Button } from "../../../../ui/Button/Button";
import "./Order.scss";
import { OrderListBasket } from "../OrderListBasket/OrderListBasket";

export type TOrderProps = {
  order: TOrder;
  deleteOrder: (arg: string) => void;
};

export const Order: FC<TOrderProps> = ({ order, deleteOrder }) => {
  console.log("render order item", order.id);
  return (
    <div className="order">
      <h3 className="order__title">Заказ №: {order.id}</h3>
      <Button
        onClick={() => deleteOrder(order.id)}
        className="order__delete-btn"
        text={<CloseOutlined />}
      />
      <div className="order__info">
        <OrderListBasket basket={order?.basket} />
        <p>Стоимость: {order.totalPrice}</p>
      </div>
    </div>
  );
};
