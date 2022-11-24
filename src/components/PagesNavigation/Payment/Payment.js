import React from "react";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import { Title } from "../../Title/Title";
import "./Payment.scss";
import { PaymentInput, PaymentInputValue } from "./PaymentInput";
import PaymentCard from "./PaymentCard";
import Click from "../../../assets/img/click.png";
import Payme from "../../../assets/img/payme.png";
import Apelsin from "../../../assets/img/apelsin.png";
import { Button } from "../../Buttons/Header/Buttons";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchUser } from "../../../redux/actions/user/userAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Payment = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const navigate = useNavigate();
  const userInfor = useSelector((state) => state.user.userSite);
  const userId = userInfor.id;
  const [amount, setAmount] = useState("");
  console.log(amount);
  return (
    <div className="payment">
      <HeaderNavbarTop />
      <div className="main">
        <div className="main-content">
          <div className="payment-title">
            <Title showButton={true} title={t("HisobniToldirish")} />
          </div>

          <div className="card-radio">
            <div className="allRadio">
              <PaymentInput
                onChange={(e) => setAmount(e.target.value)}
                radioId="radio1"
                price="10 000"
                value={"10000"}
              />
              <PaymentInput
                onChange={(e) => setAmount(e.target.value)}
                radioId="radio2"
                price="50 000"
                value={"50000"}
              />
              <PaymentInput
                onChange={(e) => setAmount(e.target.value)}
                radioId="radio3"
                price="100 000"
                value={"100000"}
              />
              <PaymentInputValue
                radioId="radio5"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="tolov">
              <PaymentCard />
              <div className="card-img">
                <a
                  href={`https://my.click.uz/services/pay?service_id=22948&merchant_id=15939&amount=${amount}&transaction_param=${userId}`}
                >
                  <img src={Click} alt="" />
                </a>
                <img src={Payme} alt="" />
                <a
                  href={`https://payment.apelsin.uz/?cash=ab7f1c8efbcf480aa9a1ed93c1908396&redirectUrl=https%3A%2F%2Fwork.bingo99.uz%2Ftest&description=TEST&amount=${amount}&userid=${userId}`}
                >
                  <img src={Apelsin} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="payment-button">
            {/* <Button
              showButton={true}
              title={t("Ochirish")}
              color="green"
              border="1px solid green"
              padding="10px 40px"
              fonstSize="24px"
              margin="20px"
              addClass="bg-buttons"
            /> */}
            <Button
              showButton={true}
              title={t("Tolash")}
              background="green"
              color="white"
              border="1px solid green"
              padding="10px 50px"
              fonstSize="24px"
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Payment;
