import React, { useEffect, useState } from "react";
import "../Navbar.scss";
import HeaderLogo from "../../../assets/img/header-logo.png";
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
  
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false)

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
            <p>Asosiy</p>
          </Link>
          {location.pathname !== "/" ? (
            <Link to="/searchHome">
              <p>Dachalar</p>
            </Link>
          ) : (
            <Link to="/searchHome">
              <p>Barcha e`lonlar</p>
            </Link>
          )}
          <Link to="/">
            <p>Bo`limlar</p>
          </Link>
          <Link to="/about">
            <p>Biz haqimizda</p>
          </Link>
        </div>
        <div className="header-profile">
          <div className="flag">
            <img src={Uzb} alt="" />
            <img src={RU} alt="" />
          </div>
          <div className="h-buttons">
            {token ? (
              <>
                <BiUserCircle
                  color="white"
                  size="35"
                  style={{ marginRight: "25px" }}
                  onClick={() => navigate("/user")}
                />
                <IoLogOutOutline
                  size="35"
                  style={{ marginRight: "25px", color: "white" }}
                  onClick={handleLogout}
                />
                <Button
                  showButton={true}
                  title="Qo`shish"
                  width="160px"
                  height="56px"
                  addClass="header-btn"
                  onClickButton={() => navigate("/addHome")}
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
                  margin="30px"
                  addClass="header-btn"
                />
                {location.pathname !== "/" ? null : (
                  <Button
                    title="Royhatdan otish"
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
          {openMenu === false ? <IoIosMenu onClick={() => setOpenMenu(true)} className="menu-bars" color="white" size={45} /> : <AiOutlineCloseCircle className="menu-bars" onClick={() => setOpenMenu(false)} color="white" size={45} />}
            <div className={`menu-box ${openMenu === true && "active"}`}>
              <AiOutlineCloseCircle onClick={() => setOpenMenu(false)} className="menu-close" size={30} />
                <div className="menu-list">
                  <Link onClick={() => setOpenMenu(false)} to="/">Asosiy</Link>
                  <Link onClick={() => setOpenMenu(false)} to="/searchHome">Barcha e`lonlar</Link>
                  <Link onClick={() => setOpenMenu(false)} to={"/"}>Bo`limlar</Link>
                  <Link onClick={() => setOpenMenu(false)} to={"/about"}>Biz haqimizda</Link>

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
