import { FC } from "react";
import "./PreLoader.scss";

export const PreLoader: FC = () => {
  return (
    <div className="Loader">
      <div className="Loader__overlay">
        <div className="Loader__icon"></div>
      </div>
    </div>
  );
};
