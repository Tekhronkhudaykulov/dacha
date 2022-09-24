import React, { useEffect } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import ProfileImg from "../../../assets/img/profilImg.jpeg";
import Succes from "../../../assets/img/succes.png";
import { Button } from "../../Buttons/Header/Buttons";
import Footer from "../../Footer/Footer";
import "./User.scss";
import CardTop from "../../Cards/TopCards/TopCardComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../redux/actions/user/userAction";
import { searchDacha } from "../../../redux/actions/Dacha/SearchDachaAction";
import {
  userDachaListDacha,
  userDachaListVerified,
} from "../../../redux/actions/user/UserDachaListAction";
import { getFavourite } from "../../../redux/actions/Card/FavouriteAction";
import LoadingCard from "../../../element/loadingCard";
import { baseUrl } from "../../../helpers/requests";
import { useTranslation } from "react-i18next";
import HelmetReact from "../../Helmet";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(userDachaListDacha());
    dispatch(userDachaListVerified());
    dispatch(searchDacha());
    dispatch(getFavourite());
  }, []);

  const userInfor = useSelector((state) => state.user.userSite);

  const { userDachaList } = useSelector((state) => state.userList);
  const { userDachaVerifiedList } = useSelector((state) => state.userList);
  const { favouriteList } = useSelector((state) => state.favourite);

  const { loading } = useSelector((state) => state.userList);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const { TabPane } = Tabs;

  const onChange = (key) => {};
  return (
    <>
      <HelmetReact name={userInfor.name} description="Dacha Rent.uz" />
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <div className="user-item">
            {userInfor.image === null ? (
              <img src={ProfileImg} alt="" />
            ) : (
              <img src={`${baseUrl}/${userInfor.image}`} alt="" />
            )}
            <div className="user-name">
              <p>{userInfor.name}</p>
              {userInfor.isIntermediary === 1 && <img src={Succes} alt="" />}
            </div>
            {userInfor.isIntermediary === 1 && (
              <p className="user-description">{t("Vositachi")}</p>
            )}
            <div className="user-button">
              <Button
                showButton={true}
                title={t("ProfileButton")}
                padding="10px 30px"
                addClass="user-btn"
                onClickButton={() => navigate("/profile")}
              />
            </div>
          </div>
          <div className="user-balance">
            <p style={{ marginBottom: "2px", marginRight: "2px" }}>
              ID: {userInfor.id}
            </p>
            <p style={{ marginBottom: "2px", marginRight: " 2px" }}>
              {t("BalansTitle")}: {userInfor.balance} {t("Sum")}
            </p>
            <Button
              showButton={true}
              title={t("Balans")}
              padding="10px 30px"
              addClass="user-btn"
              onClickButton={() => navigate("/payment")}
            />
          </div>
          <div className="user-content" style={{ marginBottom: "50px" }}>
            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab={t("Modiratsiyadagielonlar")} key="1">
                {loading ? (
                  <LoadingCard />
                ) : (
                  <div className="user-card">
                    {userDachaVerifiedList.length == 0 ? (
                      <p style={{ gridColumn: "1/4" }}>
                        {userInfor.name} {t("searchDachaTitle")}
                      </p>
                    ) : (
                      userDachaVerifiedList.map((item, key) => (
                        <CardTop product={item} propsBack />
                      ))
                    )}
                  </div>
                )}
              </TabPane>
              <TabPane tab={t("Meningelonlarim")} key="2">
                {loading ? (
                  <LoadingCard />
                ) : (
                  <div className="user-card">
                    {userDachaList.length == 0 ? (
                      <p style={{ gridColumn: "1/4" }}>
                        {userInfor.name} {t("searchDachaTitle")}
                      </p>
                    ) : (
                      userDachaList.map((item, key) => (
                        <CardTop product={item} propsBack editProps />
                      ))
                    )}
                  </div>
                )}
              </TabPane>
              <TabPane tab={t("Baholangalar")} key="3">
                {loading ? (
                  <LoadingCard />
                ) : (
                  <div className="user-card">
                    {favouriteList.length == 0 ? (
                      <p style={{ gridColumn: "1/4" }}>
                        {userInfor.name} {t("searchDachaTitle")}
                      </p>
                    ) : (
                      favouriteList.map((item, key) => (
                        <CardTop product={item} deleteProps />
                      ))
                    )}
                  </div>
                )}
              </TabPane>
            </Tabs>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default User;
