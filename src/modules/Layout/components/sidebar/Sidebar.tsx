import { FC } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

type TSidebarProps = {
  isVisible: boolean;
};

const Sidebar: FC<TSidebarProps> = ({ isVisible }) => {
  return (
    <>
      <div className={`sidebar ${isVisible && "sidebar--active"}`}>
        <div className="sidebar__container">
          <nav className="sidebar__nav nav">
            <Link className="nav__item" to={"/orders"}>
              Заказы
            </Link>
            <Link className="nav__item" to={"/basket"}>
              Корзина
            </Link>
            <Link className="nav__item" to={"/profile"}>
              Личный кабинет
            </Link>
            <Link className="nav__item" to={"/store"}>
              Меню
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
