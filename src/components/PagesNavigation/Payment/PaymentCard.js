import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const PaymentCard = () => {
  const [card, setCard] = useState({
    number: "",
    balanc: "",
  });
  const userInfor = useSelector((state) => state.user.userSite);
  const { t, i18n } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard({ [name]: value });
  };

  return (
    <div className="paymentForm">
      <form className="payment-item-card">
        <input
          type="number"
          name="number"
          placeholder={t("cardNumber")}
          onChange={handleInputChange}
        />
      </form>
      <p className="balance">
        Balans: {userInfor.balance} {t("Sum")}
      </p>
    </div>
  );
};

export default PaymentCard;
