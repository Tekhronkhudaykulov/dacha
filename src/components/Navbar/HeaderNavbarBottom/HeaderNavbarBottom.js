import React from "react";
import HeaderItemsImg from "../../../assets/img/header-item-img.png";
import ".././Navbar.scss";
import bgVideo from "../../../assets/bgVideo/videoBg.mp4";
const HeaderNavbarBottom = () => {
  return (
    <div className="header-bottom">
      <div className="video">
        <video className="video" src={bgVideo} autoPlay loop muted />
      </div>
      <div className="header-bottom-items">
        <img src={HeaderItemsImg} alt="" />
        <p>Online dacha marketplace</p>
      </div>
    </div>
  );
};

export default HeaderNavbarBottom;
