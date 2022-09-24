import React, { useEffect } from "react";
import ProfileImg from "../../../assets/img/ImageProfile.png";
import { Input } from "../../Input/FormInput/Input";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import Password from "../../../assets/icon/Outline/Solid/Status/Icon.png";
import { Title, UrlTitle } from "../../Title/Title";
import "../form.scss";
import PhoneInput from "react-phone-input-2";
import { Button } from "../../Buttons/Header/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/auth/authAction";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
const token = window.localStorage.getItem("@token");

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const { token } = useSelector((state) => state.register);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
      window.location.reload();
    }
  }, [token]);

  const { loading } = useSelector((state) => state.register);

  return (
    <>
      <HeaderNavbarTop />
      <div className="Login-item">
        <div className="login-image">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="input-link">
          <div className="login-content">
            <Title title={t("TizimgaKirish")} showButton={true} />
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  inputName={t("Parol")}
                  showButton={true}
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
              <div className="Login-button">
                <Button
                  showButton={true}
                  title={t("Kirish")}
                  width="250px"
                  height="55px"
                  loading={loading}
                />
                <Link to="/restoreProfile">
                  <UrlTitle title={t("Royhatdanotish")} showTitle={true} />
                </Link>
                <Link to="/signUp">
                  <UrlTitle title={t("QaytaParolniTiklash")} showTitle={true} />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
