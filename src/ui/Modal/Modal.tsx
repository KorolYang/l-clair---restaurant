import { ReactNode, useRef } from "react";
import "./Modal.scss";
import { CSSTransition } from "react-transition-group";

export type TModalProps = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, setIsOpen, children }: TModalProps) => {
  const handler = () => {
    setIsOpen(false);
  };

  const nodeRefModal = useRef(null);
  const nodeRefContent = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRefModal}
      in={isOpen}
      timeout={300}
      classNames={"modal"}
      unmountOnExit
    >
      <div ref={nodeRefModal} className="modal" onClick={handler}>
        <CSSTransition
          nodeRef={nodeRefContent}
          in={isOpen}
          timeout={500}
          classNames={"modal__content"}
          unmountOnExit
        >
          <div
            ref={nodeRefContent}
            className={"modal__content"}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};
