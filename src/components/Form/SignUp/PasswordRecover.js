import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import ProfileImg from "../../../assets/img/ImageProfile.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../Title/Title";
import { Button } from "../../Buttons/Header/Buttons";
import { config } from "../../../helpers/requests";

const PasswordRecover = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.register);

  const [password, setPassword] = useState("")

  const dataPush = async () => {
    try {
      await axios.post("https://api.dachatravel.uz/api/password-update", {password:password}, config);
      navigate("/");
      alert("Parol o`zgartirildi!")
    } catch (e) {
      alert("Hatolik yuz berdi!");
      throw Error(e);
    } 
  };

  return (
    <>
      <HeaderNavbarTop />
      <div className="Login-item">
        <div className="login-image">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="input-link" style={{paddingBottom: "45px"}}>
          <div className="login-content">
            <Title
              title="Yangi parolni kiriting!"
              showButton={true}
              fonstSize="50px"
            />
            <div className="login-input" style={{ marginTop: "20px" }}>
              <div className="user-name">
                <input
                  type="text"
                  placeholder="Parolni yozing!"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="Login-button">
              <Button
                showButton={true}
                title="Kirish"
                width="250px"
                height="55px"
                loading={loading}
                onClickButton={dataPush}
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecover;
