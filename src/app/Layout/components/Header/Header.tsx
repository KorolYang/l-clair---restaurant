import { FC, ReactNode } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="header">
        <Link className="header__title" to="/login">
          l'éclair
        </Link>
        {children}
      </div>
    </>
  );
};
