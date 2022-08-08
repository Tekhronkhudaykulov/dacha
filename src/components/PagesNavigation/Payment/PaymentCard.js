import React, { useState } from "react";

const PaymentCard = () => {
  const [card, setCard] = useState({
    number: "",
    balanc: "",
  });

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
          placeholder="Karta Raqam"
          onChange={handleInputChange}
        />
      </form>
      <p>Balans: 6 000 sum</p>
    </div>
  );
};

export default PaymentCard;
