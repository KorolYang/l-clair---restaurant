import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">l'éclair</div>
      <nav className="footer__nav">
        <a className="nav__link" href="#">
          О компании
        </a>
        <a className="nav__link" href="#">
          Вакансии
        </a>
        <a className="nav__link" href="#">
          Юридическая информация
        </a>
      </nav>
    </div>
  );
};
