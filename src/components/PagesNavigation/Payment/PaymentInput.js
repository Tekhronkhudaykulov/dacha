import React from "react";
import { useTranslation } from "react-i18next";

const PaymentInput = ({ radioId, price }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="payment-box">
      <label for={radioId} className="radio">
        <input
          type="radio"
          id={radioId}
          name="mayRadioFiled"
          className="radio_input"
        />
        <p style={{ marginBottom: 0 }}>
          {price} {t("Sum")}
        </p>
      </label>
    </div>
  );
};

const PaymentInputValue = ({ radioId, onChange }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="payment-box">
      <label for={radioId} className="radio">
        <input
          type="radio"
          id={radioId}
          name="mayRadioFiled"
          className="radio_input"
        />
        <input
          type="number"
          placeholder={`______${t("Sum")}`}
          className="inputNumber"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export { PaymentInputValue, PaymentInput };
