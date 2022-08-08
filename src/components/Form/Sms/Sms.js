import React, { useEffect } from "react";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import ProfileImg from "../../../assets/img/ImageProfile.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../Title/Title";
import { Button } from "../../Buttons/Header/Buttons";
import { sms } from "../../../redux/actions/auth/authAction";
import { useState } from "react";

const Sms = () => {
  const { registerList } = useSelector((state) => state.register);
  const user_id = registerList.id;


  const [code, setCode] = useState(0);

  const { smsToken } = useSelector((state) => state.register);
  const navigate = useNavigate();

  useEffect(() => {
    if (smsToken) {
      navigate("/");
      window.location.reload();
    }
  }, [smsToken]);

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.register);

  return (
    <>
      <HeaderNavbarTop />
      <div className="Login-item">
        <div className="login-image">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="input-link">
          <div className="login-content" style={{paddingBottom: "45px"}}>
            <Title
              title="Sms kodni kiriting!"
              showButton={true}
              fonstSize="50px"
            />
            <div className="login-input" style={{ marginTop: "20px" }}>
              <div className="user-name">
                <input
                  type="number"
                  placeholder="Sms kodni kiriting!"
                  onChange={(e) => setCode(e.target.value)}
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
                onClickButton={() => dispatch(sms({ user_id, code }))}
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sms;
