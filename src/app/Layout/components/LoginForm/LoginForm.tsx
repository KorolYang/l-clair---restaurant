import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../../store/auth/asyncAction";
import { appStore } from "../../../../store/store";
import { Button } from "../../../../ui/Button/Button";
import { useStoreDispatch } from "../../../../hooks/useStoreDispatch";

type TInputs = {
  userName: string;
  password: string;
};
interface IProps {
  handlerOnClick: () => void;
}
export const LoginForm: FC<IProps> = ({ handlerOnClick }) => {
  const dispatch = useStoreDispatch(appStore);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = ({ userName, password }) => {
    dispatch(getUser({ userName, password, navigate }));
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form__label" htmlFor="login">
        Логин
      </label>
      {errors.userName && <span className="error-message">{errors.userName.message}</span>}
      <input
        className="form__input"
        id="login"
        type="text"
        {...register("userName", {
          required: "Введите логин",
          maxLength: { value: 15, message: "Логин не должно превышать 15 символов" },
          pattern: { value: /^[a-zA-Z][a-zA-Z0-]*$/, message: "Логин должно состоять из латиницы" },
        })}
      />
      <label className="form__label" htmlFor="password">
        Пароль
      </label>
      {errors.password && <span className="error-message">{errors.password.message}</span>}
      <input
        className="form__input"
        id="password"
        type="password"
        {...register("password", {
          required: "Введите пароль",
          maxLength: { value: 15, message: "Пароль слишком длинный" },
          minLength: { value: 4, message: "Пароль слишком короткий" },
        })}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button text="Войти" />
        <Button onClick={handlerOnClick} text="Зарегестрироватся" />
      </div>
    </form>
  );
};
