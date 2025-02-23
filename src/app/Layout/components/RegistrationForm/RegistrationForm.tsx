import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../../../store/auth/asyncAction";
import { appStore } from "../../../../store/store";
import "./RegistrationFrom.scss";
import { Button } from "../../../../ui/Button/Button";
import { useStoreDispatch } from "../../../../hooks/useStoreDispatch";

type TInputs = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  userName: string;
  password: string;
};

interface IProps {
  handlerOnClick: () => void;
}

export const RegistrationFrom: FC<IProps> = ({ handlerOnClick }) => {
  const dispatch = useStoreDispatch(appStore);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    dispatch(postUser(data, navigate));
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form__label" htmlFor="name">
        Имя
      </label>
      {errors.name && <span className="error-message">{errors.name.message}</span>}
      <input
        className="form__input"
        id="name"
        type="text"
        {...register("name", {
          required: "Введите свое имя",
          maxLength: { value: 15, message: "Имя не должно превышать 15 символов" },
          pattern: { value: /^[А-Яа-яё][А-Яа-яё]*$/, message: "Имя должно состоять из кириллицы" },
        })}
      />
      <label className="form__label" htmlFor="surname">
        Фамилия
      </label>
      {errors.surname && <span className="error-message">{errors.surname.message}</span>}
      <input
        className="form__input"
        id="surname"
        type="text"
        {...register("surname", {
          required: "Введите свою фамилию",
          maxLength: { value: 15, message: "Фамилия не должно превышать 20 символов" },
          pattern: { value: /[А-Яа-яё]*$/, message: "Фамилия должно состоять из кириллицы" },
        })}
      />
      <label className="form__label" htmlFor="phone">
        Контактный номер
      </label>
      {errors.phone && <span className="error-message">{errors.phone.message}</span>}
      <input
        className="form__input"
        id="phone"
        type="tel"
        {...register("phone", {
          required: "Введите свой номер телефона",
          pattern: {
            value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
            message: "Неккоректный номер телефона",
          },
        })}
      />
      <label className="form__label" htmlFor="email">
        Электронная почта
      </label>
      {errors.email && <span className="error-message">{errors.email.message}</span>}
      <input
        className="form__input"
        id="email"
        type="email"
        {...register("email", {
          required: "Введите свой Email",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
            message: "Неккоректный Email",
          },
        })}
      />
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
        <Button text="Зарегестрироватся" />
        <Button onClick={handlerOnClick} text="У меня уже есть аккаунт" />
      </div>
    </form>
  );
};
