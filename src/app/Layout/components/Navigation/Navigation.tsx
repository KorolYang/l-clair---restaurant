import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { pathRoutes } from "../../../routes/pathRoutes";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { Modal } from "../../../../ui/Modal/Modal";
import { Authorization } from "../Authorization/Authorization";
import { useStoreDispatch } from "../../../../hooks/useStoreDispatch";
import { useStoreSelector } from "../../../../hooks/useStoreSelector";
import { logOut } from "../../../../store/auth/action";
import { selectIsAuth } from "../../../../store/auth/selectors";
import { appStore } from "../../../../store/store";
import { Button } from "../../../../ui/Button/Button";

export const Navigation: FC = () => {
  const isAuth = useStoreSelector(appStore, selectIsAuth);
  const dispatch = useStoreDispatch(appStore);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handlerLogin = () => {
    setIsOpen(true);
  };

  const handlerLogOut = () => {
    dispatch(logOut());
    setIsOpen(false);
    localStorage.removeItem("basket");
    Cookie.remove("accTkn");
    navigate(pathRoutes.login);
  };
  return !isAuth ? (
    <>
      <nav className="header__nav">
        <a className="nav__link" href="#about">
          О ресторане
        </a>
        <a className="nav__link" href="#contact">
          Контакты
        </a>
        <a className="nav__link" href="#">
          Информация для гостей
        </a>
      </nav>
      <Button onClick={handlerLogin} text={"Войти"} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Authorization />
      </Modal>
    </>
  ) : (
    <>
      <nav className="header__nav">
        <Link className="nav__link" to={pathRoutes.store}>
          Меню
        </Link>
        <Link className="nav__link" to={pathRoutes.profile}>
          Профиль
        </Link>
        <Link className="nav__link" to={pathRoutes.orders}>
          Заказы
        </Link>
        <Link className="nav__link" to={pathRoutes.basket}>
          Корзина
        </Link>
      </nav>
      <SwitchTheme />
      <Button onClick={handlerLogOut} text={"Выйти"} />
    </>
  );
};
