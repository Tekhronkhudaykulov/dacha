import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../Buttons/Header/Buttons";
import "./Payment.scss";
import HeaderLogo from "../../../assets/img/2222.png";
import { useNavigate } from "react-router-dom";
import requests from "../../../helpers/requests";
import { useTranslation } from "react-i18next";

const PaymentCards = ({
  paymentImg,
  paymentDescription,
  paymentPrice,
  paymentCount,
  checkboxTitle,
  checkboxLable,
  checkboxId,
  checkboxWidth,
  buttonTitle,
  buttonPadding,
  id,
}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const dachaLevel = (params) => (dispatch) => {
    dispatch({ type: "dachaLevel_start", payload: params });
    requests
      .dachaLevel(params)
      .then(({ data }) => {
        dispatch({ type: "dachaLevel_success", payload: data, _method: "PUT" });
        navigate("/user");
        alert("Success");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "dachaLevel_error", payload: message });
        navigate("/advertiseCottage");
        alert("Error");
      });
  };
  return (
    <div className="payment-card">
      <div className="payment-item">
        <img src={paymentImg} alt="" />
        <p className="payment-description">{paymentDescription}</p>
        <p className="payment-price">
          {paymentPrice} {t("Sum")}
        </p>
        <p className="payment-count">{paymentCount}</p>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {checkboxTitle}
      </p>
      {/* <div className="payment-checkbox">
        <SearchChecbox
          title={}
          label={checkboxLable}
          id={checkboxId}
          width={checkboxWidth}
        />
      </div> */}
      <div className="payment-button">
        <Button
          showButton={true}
          title={buttonTitle}
          padding={buttonPadding}
          onClickButton={() => dispatch(dachaLevel({ dacha_id: id, type: 1 }))}
        />
      </div>
    </div>
  );
};

const PaymentCards2 = ({
  paymentImg,
  paymentDescription,
  paymentPrice,
  paymentCount,
  checkboxTitle,
  checkboxLable,
  checkboxId,
  checkboxWidth,
  buttonTitle,
  buttonPadding,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dachaUp = (params) => (dispatch) => {
    dispatch({ type: "dachaUp_start", payload: params });
    requests
      .dachaUp(params)
      .then(({ data }) => {
        dispatch({ type: "dachaUp_success", payload: data, _method: "PUT" });
        navigate("/user");
        alert("Success");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "dachaUp_error", payload: message });
        navigate("/advertiseCottage");
        alert("Error");
      });
  };
  return (
    <div className="payment-card">
      <div className="payment-item">
        <img src={paymentImg} alt="" />
        <p className="payment-description">{paymentDescription}</p>
        <p className="payment-price">
          {paymentPrice} {t("Sum")}
        </p>
        <p className="payment-count">{paymentCount}</p>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {checkboxTitle}
      </p>
      {/* <div className="payment-checkbox">
        <SearchChecbox
          title={}
          label={checkboxLable}
          id={checkboxId}
          width={checkboxWidth}
        />
      </div> */}
      <div className="payment-button">
        <Button
          showButton={true}
          title={buttonTitle}
          padding={buttonPadding}
          onClickButton={() => dispatch(dachaUp({ dacha_id: id }))}
        />
      </div>
    </div>
  );
};

const PaymentCards3 = ({
  paymentImg,
  paymentDescription,
  paymentPrice,
  paymentCount,
  checkboxTitle,
  checkboxLable,
  checkboxId,
  checkboxWidth,
  buttonTitle,
  buttonPadding,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dachaUp = (params) => (dispatch) => {
    dispatch({ type: "dachaUp_start", payload: params });
    requests
      .dachaUp(params)
      .then(({ data }) => {
        dispatch({ type: "dachaUp_success", payload: data, _method: "PUT" });
        navigate("/user");
        alert("Success");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "dachaUp_error", payload: message });
        navigate("/advertiseCottage");
        alert("Error");
      });
  };
  return (
    <div className="payment-card">
      <div className="payment-item">
        <img className="payment-img" src={HeaderLogo} alt="" />
        <p className="payment-description">{paymentDescription}</p>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {checkboxTitle}
      </p>
      <div className="payment-button">
        <a href="https://myurls.co/dacharent.uz">
          <Button
            showButton={true}
            title={buttonTitle}
            padding={buttonPadding}
          />
        </a>
      </div>
    </div>
  );
};

export { PaymentCards, PaymentCards2, PaymentCards3 };
