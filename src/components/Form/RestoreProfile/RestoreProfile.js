import React from "react";
import Password from "../../../assets/icon/Outline/Solid/Status/Icon.png";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import ProfileImg from "../../../assets/img/ImageProfile.png";
import { Title, UrlTitle } from "../../Title/Title";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Input/FormInput/Input";
import { Button } from "../../Buttons/Header/Buttons";
import { useDispatch, useSelector } from "react-redux";
import requests from "../../../helpers/requests";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";

toast.configure();

const RestoreProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { loading } = useSelector((state) => state.register);

  const registerPage = (userInfo) => (dispatch) => {
    dispatch({ type: "register_start", payload: userInfo });
    requests
      .register(userInfo)
      .then(({ data }) => {
        dispatch({ type: "register_start_success", payload: data });
        toast.success("Succes!");
        navigate("/sms");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "register_start_error", payload: message });
        toast.success("Error!");
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
              <Title
                margin={12}
                showButton={true}
                title={t("Royhatdanotish")}
              />
              <div className="login-input">
                <Input
                  showButton={true}
                  inputName={t("FoydalanuvchiNomi")}
                  inputType="text"
                  formProps={register("name", {
                    required: true,
                  })}
                />
                {errors.name && <p className="validation">{t("name")}</p>}
              </div>
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
                </div>
                {errors.phone && (
                  <p className="validation">{t("telValidation")}</p>
                )}
              </div>
              <div className="login-input">
                <Input
                  showButton={true}
                  inputName={t("Parol")}
                  img={Password}
                  inputType="password"
                  formProps={register("password", {
                    required: "Malumot kiriting!",
                    minLength: 6,
                  })}
                />
                {errors.password && (
                  <p className="validation">{t("parolValidation")}</p>
                )}
              </div>
              <div className="login-input">
                <Input
                  showButton={true}
                  inputName={t("Parol")}
                  img={Password}
                  inputType="password"
                  formProps={register("password", {
                    required: "Malumot kiriting!",
                    minLength: 6,
                  })}
                />
                {errors.password && (
                  <p className="validation">{t("parolValidation")}</p>
                )}
              </div>
            </div>
            <div className="Login-button">
              <Button
                width="250px"
                height="55px"
                title={t("Royhatdanotish")}
                showButton={true}
                loading={loading}
              />
              <Link to="/login">
                <UrlTitle title={t("Kirish")} showTitle={true} />
              </Link>
              <Link to="/signUp">
                <UrlTitle title={t("QaytaParolniTiklash")} showTitle={true} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RestoreProfile;
