import React from "react";

const PaymentInput = ({ radioId, price }) => {
  return (
    <div className="payment-box">
      <label for={radioId} className="radio">
        <input
          type="radio"
          id={radioId}
          name="mayRadioFiled"
          className="radio_input"
        />
        <p style={{ marginBottom: 0 }}>{price}sum</p>
      </label>
    </div>
  );
};

const PaymentInputValue = ({ radioId, onChange }) => {
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
          placeholder="______ sum"
          className="inputNumber"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export { PaymentInputValue, PaymentInput };
