import { ReactNode } from "react";
import "./Button.scss";
import cn from "classnames";

export type TButtonProps = {
  text?: string | ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
};

export const Button = ({ text, onClick, className, disabled }: TButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} className={cn("button", className)}>
      {text}
    </button>
  );
};
