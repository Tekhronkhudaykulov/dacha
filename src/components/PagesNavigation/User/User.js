import React, { useEffect } from "react";
import { Tabs } from 'antd';
import 'antd/dist/antd.css'
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
import { userDachaListDacha } from "../../../redux/actions/user/UserDachaListAction";
import LoadingCard from "../../../element/loadingCard";
import { baseUrl } from "../../../helpers/requests";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(userDachaListDacha());
    dispatch(searchDacha());
  }, []);

  const userInfor = useSelector((state) => state.user.userSite);

  const { userDachaList } = useSelector((state) => state.userList);
  const { loading } = useSelector((state) => state.userList);

  const navigate = useNavigate();

  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
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
              <p className="user-description">Vositachi</p>
            )}
            <div className="user-button">
              <Button
                showButton={true}
                title="Profilni tahrirlash"
                padding="10px 30px"
                addClass="user-btn"
                onClickButton={() => navigate("/profile")}
              />
            </div>
          </div>
          <div className="user-balance">
            <p style={{ marginBottom: "2px" }}>
              Balans: {userInfor.balance} sum
            </p>
            <Button
              showButton={true}
              title="Hamyonni to'ldiring"
              padding="10px 30px"
              addClass="user-btn"
              onClickButton={() => navigate("/payment")}
            />
          </div>
          <div className="user-content" style={{ marginBottom: "50px" }}>
            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="Mening e`lonlarim" key="1">
                {loading ? (
                  <LoadingCard />
                ) : (
                  <div className="user-card">
                    {userDachaList.length == 0 ? (
                      <p style={{ gridColumn: "1/4" }}>{userInfor.name} sizda dachangiz yoq!</p>
                    ) : (
                      userDachaList.map((item, key) => (
                        <CardTop product={item} props={true}/>
                      ))
                    )}
                  </div>
                )}
              </TabPane>
              <TabPane tab="Baholanganlar" key="2">
                <p>Hech narsa yoq!</p>
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
