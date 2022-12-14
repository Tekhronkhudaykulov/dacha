import React, { useEffect } from "react";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import PaymentImg from "../../../assets/img/paymentImgOne.png";
import PaymentImgTwo from "../../../assets/img/PaymentImgTwo.png";
import { PaymentCards, PaymentCards2, PaymentCards3 } from "./PaymentCards";
import { useParams } from "react-router-dom";
// import PaymentCard from "./PaymentCard";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../redux/actions/user/userAction";

const AdvertiseCottage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const userInfor = useSelector((state) => state.user.userSite);

  console.log(userInfor);

  return (
    <div>
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <div className="all-payment-card">
            <PaymentCards
              paymentImg={PaymentImg}
              paymentDescription={t("title")}
              paymentPrice="7 000"
              paymentCount={t("title3")}
              checkboxTitle={t("title5")}
              checkboxLable="one"
              checkboxId="one"
              checkboxWidth="300px"
              buttonTitle={t("Tolash")}
              buttonPadding="5px 30px"
              id={id}
            />
            <PaymentCards2
              paymentImg={PaymentImgTwo}
              paymentDescription={t("title2")}
              paymentPrice="50 000"
              paymentCount={t("title4")}
              checkboxTitle={t("title6")}
              checkboxLable="two"
              checkboxId="two"
              checkboxWidth="400px"
              buttonTitle={t("Tolash")}
              buttonPadding="5px 30px"
              id={id}
            />
            <PaymentCards3
              paymentImg={PaymentImgTwo}
              checkboxTitle="Premium e`lonlar sayt administratorlari tomonidan kelishuv asosida joylanadi!"
              checkboxWidth="400px"
              buttonTitle="Qayta aloqa"
              buttonPadding="5px 30px"
              id={id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCottage;
