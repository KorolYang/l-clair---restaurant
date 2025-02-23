import React, { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegistrationFrom } from "../RegistrationForm/RegistrationForm";
import "./Authorization.scss";

const onChangeFormType = (fn: React.Dispatch<React.SetStateAction<boolean>>, isChange: boolean) =>
  fn(isChange);

export const Authorization = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  return (
    <>
      <h2 className="auth__title">Приветствуем Вас!</h2>
      {isRegistration && (
        <RegistrationFrom handlerOnClick={() => onChangeFormType(setIsRegistration, false)} />
      )}
      {!isRegistration && (
        <LoginForm handlerOnClick={() => onChangeFormType(setIsRegistration, true)} />
      )}
    </>
  );
};
