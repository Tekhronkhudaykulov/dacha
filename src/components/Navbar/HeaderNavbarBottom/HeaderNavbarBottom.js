import React from "react";
import HeaderItemsImg from "../../../assets/img/Layer 6.png";
import ".././Navbar.scss";
import bgVideo from "../../../assets/bgVideo/charvak.mp4";
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
        <a
          className="sotsial-item"
          href="https://myurls.co/dacharent.uz/links/624f702068c233003268bbd7/click"
        >
          <img src={Telegramm} alt="" />
        </a>
        <a
          className="sotsial-item"
          href="https://myurls.co/dacharent.uz/links/624f704e68c233003268bbd9/click"
        >
          <img src={Instagramm} alt="" />
        </a>
        <a
          className="sotsial-item"
          href=" https://myurls.co/dacharent.uz/links/624f71de68c233002d68bb8c/click"
        >
          <img src={Facebook} alt="" />
        </a>
        <a
          className="sotsial-item"
          href="https://myurls.co/dacharent.uz/links/624f710e68c233002d68bb85/click"
        >
          <img src={Youtube} alt="" />
        </a>
        <a
          className="sotsial-item"
          href="https://myurls.co/dacharent.uz/links/624f71de68c233002d68bb8c/click"
        >
          <img src={WhatSap} alt="" />
        </a>
      </div>
    </>
  );
};

export default HeaderNavbarBottom;
