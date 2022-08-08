import React from "react";
import Call from "../../../assets/icon/call.png";
import Password from "../../../assets/icon/Outline/Solid/Status/Icon.png";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import ProfileImg from "../../../assets/img/ImageProfile.png";
import { Title, UrlTitle } from "../../Title/Title";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Input/FormInput/Input";
import { Button } from "../../Buttons/Header/Buttons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import requests from "../../../helpers/requests";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const passwordRecover = (params) => (dispatch) => {
    dispatch({ type: "password_Recover_start", payload: params });
    requests
      .passwordRecover(params)
      .then(({ data }) => {
        dispatch({ type: "password_Recover_start_success", payload: data});
        alert("Raqam to`g`ri!")
        navigate("/smsRecover")
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "password_Recover_start_error", payload: message });
        alert("Bazada bunaqa raqam topilmadi!")
        navigate("/signUp")
      });
  };

  const onSubmit = (data) => {
    dispatch(passwordRecover(data));
  };


  const {loading} = useSelector((state) => state.register)
  return (
    <>
      <HeaderNavbarTop />
      <div className="Login-item">
        <div className="login-image">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="input-link input-transform">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-content">
            <Title showButton={true} title="Qayta profilni tiklash" />
            {/* <div className="login-input">
            <Input
              showButton={true}
              inputType="text"
              inputName="Foydalanuvchi nomi"
              formProps={register("name", {required: "Malumot kiriting!"})}
            />
             {errors.name && (
                  <p className="validation">
                    Malumotni kiriting!
                  </p>
                )}
            </div> */}
            <div className="login-input">
            <Input
              showButton={true}
              img={Call}
              inputType="text"
              inputName="Tel nomer"
              formProps={register("phone", {required: "Malumot kiriting!"})}
            />
             {errors.phone && (
                  <p className="validation">
                    Malumotni kiriting!
                  </p>
                )}
            </div>
            {/* <div className="login-input">
            <Input
              showButton={true}
              inputName="Parol"
              img={Password}
              inputType="password"
              formProps={register("phone", {required: "Malumot kiriting!"})}
            />
            </div>
            <Input
              showButton={true}
              inputName="Parolni takrorang"
              img={Password}
              inputType="password"
            /> */}
          </div>
          <div className="Login-button">
            <Button
              showButton={true}
              title="Ro`yxatdan o`tish"
              width="250px"
              height="55px"
              type="submit"
              loading={loading}
            />
            <Link to="/login">
              <UrlTitle title="Kirish" showTitle={true} />
            </Link>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
