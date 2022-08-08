import React from "react";
import { useSelector } from "react-redux";
import HeaderNavbarBottom from "../../components/Navbar/HeaderNavbarBottom/HeaderNavbarBottom";
import HeaderNavbarTop from "../../components/Navbar/HeaderNavbarTop/HeaderNavbarTop";
import MainContainer from "../mainContainer/MainContainer";

const HeaderContainer = () => {
  return (
    <div>
      <HeaderNavbarTop />
      <HeaderNavbarBottom />
      <MainContainer />
    </div>
  );
};

export default HeaderContainer;
