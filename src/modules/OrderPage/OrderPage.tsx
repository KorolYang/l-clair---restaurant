import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { login } from "../../store/auth/action";
import { selectOrder, selectUser } from "../../store/auth/selectors";
import { appStore } from "../../store/store";
import { deleteOrder } from "../StorePage/store/asyncAction";
import { menuStore } from "../StorePage/store/menuStore";
import { Order } from "./components/Order/Order";
import "./OrderPage.scss";

const OrdersPage = () => {
  const menuDispatch = useStoreDispatch(menuStore);
  const appDispatch = useStoreDispatch(appStore);
  const user = useStoreSelector(appStore, selectUser);
  const orders = useStoreSelector(appStore, selectOrder);

  const handlerDeleteOrder = (id: string) => {
    const fetchData = {
      ...user,
      order: user.order.filter((product) => product.id !== id),
    };
    menuDispatch(deleteOrder(user.id, fetchData)).then((res) => {
      appDispatch(login(res));
    });
  };
  console.log("render order list");
  return (
    <div>
      <h2 className="order__header">Ваши заказы, {user.name}</h2>
      {orders.length !== 0 ? (
        orders?.map((order) => (
          <Order key={order.id} order={order} deleteOrder={handlerDeleteOrder} />
        ))
      ) : (
        <div className="order__empty">Вы еще не делали заказ</div>
      )}
    </div>
  );
};

export default OrdersPage;
