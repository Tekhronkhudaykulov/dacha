import React, { useEffect, useState } from "react";
import "../Navbar.scss";
import HeaderLogo from "../../../assets/img/2222.png";
import { baseUrl } from "../../../helpers/requests";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from "../../../translate";
import Uzb from "../../../assets/img/uz.svg";
import RU from "../../../assets/img/RU.png";
import { Button } from "../../Buttons/Header/Buttons";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { clearUser, fetchUser } from "../../../redux/actions/user/userAction";

const HeaderNavbarTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const onPressButton = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    window.localStorage.removeItem("@token");
    dispatch(clearUser());
    navigate("/");
  };
  const token = window.localStorage.getItem("@token");

  const userInfor = useSelector((state) => state.user.userSite);

  return (
    <div className="header-navbar-border">
      <div className="header-navbar">
        <div className="header-img">
          <Link to="/">
            <img className="nav-img" src={HeaderLogo} alt="" />
          </Link>
        </div>
        <div className="header-title">
          <Link to="/">
            <p> {t("asosiy")}</p>
          </Link>
          <Link to="/">
            <p>{t("Bolimlar")}</p>
          </Link>
          <Link to="/searchHome">
            <p>{t("BarchaElonlar")}</p>
          </Link>
          <Link to="/about">
            <p>{t("BizHaqimizda")}</p>
          </Link>
        </div>
        <div className="header-profile">
          <div className="flag">
            <img onClick={() => i18n.changeLanguage("uz")} src={Uzb} alt="" />
            <img onClick={() => i18n.changeLanguage("ru")} src={RU} alt="" />
          </div>
          <div className="h-buttons">
            {token ? (
              <>
                {userInfor.image == null ? (
                  <BiUserCircle
                    color="white"
                    size="35"
                    style={{ marginRight: "25px" }}
                    onClick={() => navigate("/user")}
                  />
                ) : (
                  <img
                    onClick={() => navigate("/user")}
                    style={{
                      marginRight: "20px",
                      width: "38px",
                      height: "38px",
                      objectFit: "contain",
                    }}
                    src={`${baseUrl}/${userInfor?.image}`}
                    alt=""
                  />
                )}
                <IoLogOutOutline
                  size="35"
                  style={{ marginRight: "25px", color: "white" }}
                  onClick={handleLogout}
                />
                <Button
                  showButton={true}
                  title={t("addButtonHeader")}
                  width="160px"
                  height="56px"
                  addClass="header-btn"
                  onClickButton={() => navigate("/addHome")}
                />
              </>
            ) : (
              <>
                <Button
                  title={t("Kirish")}
                  onClickButton={onPressButton}
                  showButton={true}
                  width="100px"
                  height="50px"
                  margin="30px"
                  addClass="header-btn"
                />
                {location.pathname !== "/" ? null : (
                  <Button
                    title={t("Royhatdanotish")}
                    showButton={true}
                    width="235px"
                    height="50px"
                    addClass="header-btn"
                    onClickButton={() => navigate("/restoreProfile")}
                  />
                )}
              </>
            )}
          </div>
          {openMenu === false ? (
            <IoIosMenu
              onClick={() => setOpenMenu(true)}
              className="menu-bars"
              color="white"
              size={45}
            />
          ) : (
            <AiOutlineCloseCircle
              className="menu-bars"
              onClick={() => setOpenMenu(false)}
              color="white"
              size={45}
            />
          )}
          <div className={`menu-box ${openMenu === true && "active"}`}>
            <AiOutlineCloseCircle
              onClick={() => setOpenMenu(false)}
              className="menu-close"
              size={30}
            />
            <div className="menu-list">
              <Link onClick={() => setOpenMenu(false)} to="/">
                Asosiy
              </Link>
              <Link onClick={() => setOpenMenu(false)} to="/searchHome">
                Barcha e`lonlar
              </Link>
              <Link onClick={() => setOpenMenu(false)} to={"/"}>
                Bo`limlar
              </Link>
              <Link onClick={() => setOpenMenu(false)} to={"/about"}>
                Biz haqimizda
              </Link>

              {token ? (
                <>
                  <Button
                    showButton={true}
                    title="Qo`shish"
                    width="160px"
                    height="56px"
                    onClickButton={() => navigate("/addHome")}
                  />
                  <BiUserCircle
                    color="white"
                    size="35"
                    style={{ marginRight: "25px", marginLeft: "25px" }}
                    onClick={() => navigate("/user")}
                  />
                  <IoLogOutOutline
                    size="35"
                    style={{ marginRight: "25px", color: "white" }}
                    onClick={handleLogout}
                  />
                </>
              ) : (
                <>
                  <Button
                    title="Kirish"
                    onClickButton={onPressButton}
                    showButton={true}
                    width="100px"
                    height="50px"
                  />
                  {location.pathname !== "/" ? null : (
                    <Button
                      title="Royhatdan otish"
                      showButton={true}
                      width="235px"
                      height="50px"
                      onClickButton={() => navigate("/restoreProfile")}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbarTop;
