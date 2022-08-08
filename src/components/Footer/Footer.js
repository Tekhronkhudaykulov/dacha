import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/icon/Solid/Brands/Facebook.png";
import Instagramm from "../../assets/icon/Solid/Brands/Instagram.png";
import Telegram from "../../assets/icon/Solid/Brands/Telegram.png";
import { Title } from "../Title/Title";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-items">
        <div className="footer-text">
          <Title title="Umumiy" fonstSize="40px" showButton={true} />
          <p>Bosh sahifa</p>
          <Link to="/about">
            <p style={{ color: "black" }}>Biz haqimizda</p>
          </Link>
          <Link to="/use">
            <p style={{ color: "black" }}>Foydalanish shartlari</p>
          </Link>
        </div>
        <div className="footer-text">
          <Title title="Murojaat uchun" fonstSize="40px" showButton={true} />
          <p>Har kuni 08:00 - 18:00</p>
          <p>+998 (90) 123-45-67</p>
          <p>+998 (90) 765-43-21</p>
        </div>
        <div className="footer-text">
          <Title
            title="Ijtimoiy tarmoqlarda"
            fonstSize="40px"
            showButton={true}
          />
          <div className="footer-image">
            <img src={Facebook} alt="" />
            <img src={Instagramm} alt="" />
            <img src={Telegram} alt="" />
          </div>
        </div>
      </div>
      <p className="copy">Dacha estate - Barcha huquqlar himoyalangan</p>
    </>
  );
};

export default Footer;

// <Link to="main/about">
//             <p>Biz haqimizda</p>
//           </Link>
//           <Link to="main/use">
//             <p>Foydalanish shartlari</p>
//           </Link>
