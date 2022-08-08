import React from "react";
import "../Buttons.scss";

const TabButton = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={isActive ? "red" : "none about-home-btn"}
      type="button"
    >
      {title}
    </button>
  );
};

export default TabButton;
