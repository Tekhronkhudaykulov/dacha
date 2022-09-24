import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PlayMarket from "../../assets/img/Google-Play-Logo-PNG-Pic.png";
import AppStore from "../../assets/img/appstore.png";
import { Title } from "../Title/Title";
import "./Footer.scss";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="footer-items">
        <div className="footer-text">
          <Title title={t("Umumiy")} fonstSize="40px" showButton={true} />
          <p>{t("BoshSahifa")}</p>
          <Link to="/about">
            <p style={{ color: "black" }}>{t("BizHaqimizda")}</p>
          </Link>
          <Link to="/use">
            <p style={{ color: "black" }}>{t("FoydalanishShartlari")}</p>
          </Link>
        </div>
        <div className="footer-text">
          <Title
            title={t("MurojaatUchun")}
            fonstSize="40px"
            showButton={true}
          />
          <p>{t("HarKuni")} 08:00 - 18:00</p>
          <p>+998 (90) 123-45-67</p>
          <p>+998 (90) 765-43-21</p>
        </div>
        <div className="footer-text">
          <Title title={t("Download")} fonstSize="40px" showButton={true} />
          <div className="appStore-playmarket">
            <a href="https://play.google.com/store" target="_blank">
              <img src={PlayMarket} />
            </a>
            <a href="https://www.apple.com/ru/app-store/" target="_blank">
              <img src={AppStore} />
            </a>
          </div>
        </div>
      </div>
      <p className="copy">DachaRent.uz - {t("dachaLaw")}</p>
    </>
  );
};

export default Footer;
