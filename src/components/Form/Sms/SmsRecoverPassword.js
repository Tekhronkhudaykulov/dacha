import React, { useEffect } from "react";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import ProfileImg from "../../../assets/img/ImageProfile.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../Title/Title";
import { Button } from "../../Buttons/Header/Buttons";
import { useState } from "react";
import { verifyRecover } from "../../../redux/actions/auth/authAction";
import { useTranslation } from "react-i18next";

const SmsRecoverPassword = () => {
  const dispatch = useDispatch();

  const { userRecover } = useSelector((state) => state.register);

  const { t, i18n } = useTranslation();
  const user_id = userRecover.id;

  const navigate = useNavigate();

  const [code, setCode] = useState(0);
  const { loading } = useSelector((state) => state.register);

  return (
    <>
      <HeaderNavbarTop />
      <div className="Login-item">
        <div className="login-image">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="input-link">
          <div className="login-content" style={{ paddingBottom: "45px" }}>
            <Title title={t("SmsTitle")} showButton={true} fonstSize="50px" />
            <div className="login-input" style={{ marginTop: "20px" }}>
              <div className="user-name">
                <input
                  type="number"
                  placeholder={t("SmsTitle")}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>
            <div className="Login-button">
              <Button
                showButton={true}
                title={t("Kirish")}
                width="250px"
                height="55px"
                loading={loading}
                onClickButton={() =>
                  dispatch(
                    verifyRecover(
                      { user_id, code },
                      navigate("/passwordRecover")
                    )
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmsRecoverPassword;
