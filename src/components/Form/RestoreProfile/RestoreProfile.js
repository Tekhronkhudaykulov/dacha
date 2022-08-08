import React, { useEffect } from "react";
import Password from "../../../assets/icon/Outline/Solid/Status/Icon.png";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import ProfileImg from "../../../assets/img/ImageProfile.png";
import { Title, UrlTitle } from "../../Title/Title";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Input/FormInput/Input";
import { Button } from "../../Buttons/Header/Buttons";
import { useDispatch, useSelector } from "react-redux";
import requests from "../../../helpers/requests";
import { registerPage } from "../../../redux/actions/auth/authAction";
import { useForm } from "react-hook-form";

import PhoneInput from "react-phone-input-2";

const RestoreProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { loading } = useSelector((state) => state.register);

   const registerPage = (userInfo) => (dispatch) => {
    dispatch({ type: "register_start", payload: userInfo });
    requests
      .register(userInfo)
      .then(({ data }) => {
        dispatch({ type: "register_start_success", payload: data });
        alert("Registratsiyadan muvaffaqiyatli o`tdiz!");
        navigate("/sms");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "register_start_error", payload: message });
        alert("Registratsiyadan hatolik bo`ldi!");
        navigate("/restoreProfile");
      });
  };

  const onSubmit = (data) => {
    dispatch(registerPage(data));
  };
  return (
    <>
      <HeaderNavbarTop />
      <div className="Login-item">
        <div className="login-image">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="input-link">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-content">
              <Title margin={12} showButton={true} title="Ro`yxatdan o`tish" />
              <div className="login-input">
                <Input
                  showButton={true}
                  inputType="text"
                  formProps={register("name", {
                    required: true,
                  })}
                />
                {errors.name && <p className="validation">Ismni yozing !</p>}
              </div>
              <div className="login-input">
                <p>Tel</p>
                <div className="user-name">
                  <input
                    type="number"
                    {...register("phone", {
                      required: "Malumot kiriting!",
                      minLength: 12,
                    })}
                  />
                </div>
                {errors.phone && (
                  <p className="validation">
                    Telefon raqam 12ta harfdan iborat bolishi kerak !
                  </p>
                )}
              </div>
              <div className="login-input">
                <Input
                  showButton={true}
                  inputName="Parol"
                  img={Password}
                  inputType="password"
                  formProps={register("password", {
                    required: "Malumot kiriting!",
                    minLength: 6,
                  })}
                />
                {errors.password && (
                  <p className="validation">
                    Parol 6ta harfdan koproq bolishi kerak !
                  </p>
                )}
              </div>
              <div className="login-input">
                <Input
                  showButton={true}
                  inputName="Parol"
                  img={Password}
                  inputType="password"
                  formProps={register("password", {
                    required: "Malumot kiriting!",
                    minLength: 6,
                  })}
                />
                {errors.password && (
                  <p className="validation">
                    Parol 6ta harfdan koproq bolishi kerak !
                  </p>
                )}
              </div>
            </div>
            <div className="Login-button">
              <Button
                width="250px"
                height="55px"
                title="Ro`yxatdan o`tish"
                showButton={true}
                loading={loading}
              />
              <Link to="/login">
                <UrlTitle title="Kirish" showTitle={true} />
              </Link>
              <Link to="/signUp">
                <UrlTitle title="Qayta tiklash" showTitle={true} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RestoreProfile;
