import React from "react";
import "../Buttons.scss";
import { uzb } from "../../../translate/uzb";
import i18n from "../../../translate";
const TabButton = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={isActive ? "red" : "none about-home-btn"}
      type="button"
    >
      {i18n.language == "uz" ? title.name_uz : title.name_ru}
    </button>
  );
};

export default TabButton;
