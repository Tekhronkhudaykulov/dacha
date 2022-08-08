import React from "react";
import HeaderNavbarTop from "../../Navbar/HeaderNavbarTop/HeaderNavbarTop";
import PaymentImg from "../../../assets/img/paymentImgOne.png";
import PaymentImgTwo from "../../../assets/img/PaymentImgTwo.png";
import {PaymentCards, PaymentCards2} from "./PaymentCards"
import { useParams } from "react-router-dom";
import PaymentCard from "./PaymentCard";

const AdvertiseCottage = () => {
  const {id} = useParams()
    return (
       <div>
         <HeaderNavbarTop/>
        <div className="main">
        <div className="main-content">
        <div className="all-payment-card">
            <PaymentCards
              paymentImg={PaymentImg}
              paymentDescription="Yangi boshlash"
              paymentPrice="5000"
              paymentCount="4x koproq kuzatuvlar"
              checkboxTitle="TOP elonlar 7 kunga"
              checkboxLable="one"
              checkboxId="one"
              checkboxWidth="300px"
              buttonTitle="To`lamoq"
              buttonPadding="5px 30px"
              id={id}
            />
            <PaymentCards2
              paymentImg={PaymentImgTwo}
              paymentDescription="Tez sotuv"
              paymentPrice="40 000"
              paymentCount="8x koproq kuzatuvlar"
              checkboxTitle="E`lonni 1 haftalik Top ga kotarish"
              checkboxLable="two"
              checkboxId="two"
              checkboxWidth="400px"
              buttonTitle="To`lamoq"
              buttonPadding="5px 30px"
              id={id}
            />
          </div> 
            </div>
            </div>

       </div>
    )
}

export default AdvertiseCottage;