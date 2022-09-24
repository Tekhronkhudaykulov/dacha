import React from "react";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import PhoneInput from "react-phone-input-2";
import ProfileImg from "../../../assets/img/ImageProfile.png";
import { Title, UrlTitle } from "../../Title/Title";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Input/FormInput/Input";
import { Button } from "../../Buttons/Header/Buttons";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import requests from "../../../helpers/requests";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const passwordRecover = (params) => (dispatch) => {
    dispatch({ type: "password_Recover_start", payload: params });
    requests
      .passwordRecover(params)
      .then(({ data }) => {
        dispatch({ type: "password_Recover_start_success", payload: data });
        alert("Raqam to`g`ri!");
        navigate("/smsRecover");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "password_Recover_start_error", payload: message });
        alert("Bazada bunaqa raqam topilmadi!");
        navigate("/signUp");
      });
  };

  const onSubmit = (data) => {
    dispatch(passwordRecover(data));
  };

  const { loading } = useSelector((state) => state.register);
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
              <Title showButton={true} title={t("QaytaParolniTiklash")} />
              <div className="login-input">
                <p>{t("Tel")}</p>
                <div className="user-name">
                  <Controller
                    control={control}
                    name="phone"
                    rules={{ required: true }}
                    render={({ field: { ref, ...field } }) => (
                      <PhoneInput
                        {...field}
                        country={"uz"}
                        defaultMask={"(..) ...-..-.."}
                        placeholder="+998"
                        alwaysDefaultMask={true}
                        name="phone"
                        inputExtraProps={{
                          ref,
                          required: true,
                          autoFocus: true,
                        }}
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="validation">{t("telValidation")}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="Login-button">
              <Button
                showButton={true}
                title={t("Royhatdanotish")}
                width="250px"
                height="55px"
                type="submit"
                loading={loading}
              />
              <Link to="/login">
                <UrlTitle title={t("Kirish")} showTitle={true} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
