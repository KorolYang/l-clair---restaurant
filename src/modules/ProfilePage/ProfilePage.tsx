import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../ui/Button/Button";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { appStore } from "../../store/store";
import { selectUser } from "../../store/auth/selectors";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { editUserByID } from "../../store/auth/asyncAction";
import "./ProfilePage.scss";

type TInputs = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  userName: string;
};

export const ProfilePage = () => {
  console.log("render profile");
  const dispatch = useStoreDispatch(appStore);
  const user = useStoreSelector(appStore, selectUser);
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TInputs>({
    values: {
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      email: user.email,
      userName: user.userName,
    },
  });

  const handlerIsDisabled = () => {
    setIsDisabled((prev) => !prev);
  };

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    setIsDisabled((prev) => !prev);
    const fetchData = {
      ...user,
      userName: data.userName,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      email: data.email,
    };
    dispatch(editUserByID(user.id, fetchData));
  };
  return (
    <>
      <div className="profile-header">
        <h2 className="profile__title">Ваши данные</h2>
        <Button onClick={handlerIsDisabled} text="Изменить данные" />
      </div>
      <div className="profile">
        <div className="profile__avatar">
          <img
            src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
            alt="profile-avatar"
          />
        </div>
        <div className="profile__info">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form__label" htmlFor="name">
              Имя
            </label>
            {errors.name && <span className="error-message">{errors.name.message}</span>}
            <input
              disabled={isDisabled}
              className="form__input"
              id="name"
              type="text"
              {...register("name", {
                required: "Введите свое имя",
                maxLength: { value: 15, message: "Имя не должно превышать 15 символов" },
                pattern: {
                  value: /^[А-Яа-яё][А-Яа-яё]*$/,
                  message: "Имя должно состоять из кириллицы",
                },
              })}
            />
            <label className="form__label" htmlFor="surname">
              Фамилия
            </label>
            {errors.surname && <span className="error-message">{errors.surname.message}</span>}
            <input
              disabled={isDisabled}
              className="form__input"
              id="surname"
              type="text"
              {...register("surname", {
                required: "Введите свою фамилию",
                maxLength: { value: 15, message: "Фамилия не должно превышать 20 символов" },
                pattern: { value: /[А-Яа-яё]*$/, message: "Фамилия должно состоять из кириллицы" },
              })}
            />
            <label className="form__label" htmlFor="login">
              Логин
            </label>
            {errors.userName && <span className="error-message">{errors.userName.message}</span>}
            <input
              disabled={isDisabled}
              className="form__input"
              id="login"
              type="text"
              {...register("userName", {
                required: "Введите логин",
                maxLength: { value: 15, message: "Логин не должно превышать 15 символов" },
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z0-]*$/,
                  message: "Логин должно состоять из латиницы",
                },
              })}
            />
            <label className="form__label" htmlFor="phone">
              Контактный номер
            </label>
            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
            <input
              disabled={isDisabled}
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
              disabled={isDisabled}
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
            <Button disabled={isDisabled} text="Сохранить изменения" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
