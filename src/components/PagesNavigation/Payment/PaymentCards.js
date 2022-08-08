import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../Buttons/Header/Buttons";
import { SearchChecbox } from "../../Input/SearchInput/SearchInput";
import "./Payment.scss";
import { dachaLevel, dachaUp } from "../../../redux/actions/Dacha/DachaLevelAction";

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
  id
}) => {
  const dispatch = useDispatch()
  return (
    <div className="payment-card">
      <div className="payment-item">
        <img src={paymentImg} alt="" />
        <p className="payment-description">{paymentDescription}</p>
        <p className="payment-price">{paymentPrice} sum</p>
        <p className="payment-count">{paymentCount}</p>
      </div>
      <p style={{textAlign: "center", marginTop: "20px", fontSize: "20px", fontWeight:"bold"}}>{checkboxTitle}</p>
      {/* <div className="payment-checkbox">
        <SearchChecbox
          title={}
          label={checkboxLable}
          id={checkboxId}
          width={checkboxWidth}
        />
      </div> */}
      <div className="payment-button">
        <Button showButton={true} title={buttonTitle} padding={buttonPadding} onClickButton={() => dispatch(dachaLevel({dacha_id:id, type:1}))}/>
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
  id
}) => {
  const dispatch = useDispatch()
  return (
    <div className="payment-card">
      <div className="payment-item">
        <img src={paymentImg} alt="" />
        <p className="payment-description">{paymentDescription}</p>
        <p className="payment-price">{paymentPrice} sum</p>
        <p className="payment-count">{paymentCount}</p>
      </div>
      <p style={{textAlign: "center", marginTop: "20px", fontSize: "20px", fontWeight:"bold"}}>{checkboxTitle}</p>
      {/* <div className="payment-checkbox">
        <SearchChecbox
          title={}
          label={checkboxLable}
          id={checkboxId}
          width={checkboxWidth}
        />
      </div> */}
      <div className="payment-button">
        <Button showButton={true} title={buttonTitle} padding={buttonPadding} onClickButton={() => dispatch(dachaUp({dacha_id:id}))}/>
      </div>
    </div>
  );
};

export {
  PaymentCards, PaymentCards2
}


