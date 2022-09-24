import React from "react";
import HeaderItemsImg from "../../../assets/img/X212.png";
import ".././Navbar.scss";
import bgVideo from "../../../assets/bgVideo/videoBg.mp4";
import Facebook from "../../../assets/img/f.png";
import Instagramm from "../../../assets/img/i.png";
import Telegramm from "../../../assets/img/t.png";
import Youtube from "../../../assets/img/y.png";
import WhatSap from "../../../assets/img/w.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HelmetReact from "../../Helmet";

const HeaderNavbarBottom = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="header-bottom">
        <div className="video">
          <video className="video" src={bgVideo} autoPlay loop muted />
        </div>
        <div className="header-bottom-items">
          <img src={HeaderItemsImg} alt="" />
        </div>
        <HelmetReact name="Dacha Rent.uz" description={t("logo")} />
      </div>
      <div className="sotsial">
        <a className="sotsial-item" href="https://myurls.co/dacharent.uz">
          <img src={Telegramm} alt="" />
        </a>
        <a className="sotsial-item" href="https://myurls.co/dacharent.uz">
          <img src={Instagramm} alt="" />
        </a>
        <a className="sotsial-item" href="https://myurls.co/dacharent.uz">
          <img src={Facebook} alt="" />
        </a>
        <a className="sotsial-item" href="https://myurls.co/dacharent.uz">
          <img src={Youtube} alt="" />
        </a>
        <a className="sotsial-item" href="https://myurls.co/dacharent.uz">
          <img src={WhatSap} alt="" />
        </a>
      </div>
    </>
  );
};

export default HeaderNavbarBottom;
