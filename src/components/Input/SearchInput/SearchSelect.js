import React from "react";
import { useTranslation } from "react-i18next";

const SearchSelect = ({ category, onChange, inputP }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="all-input">
      <p className={`p ${inputP}`}>{t("Shahar")}</p>
      <select
        className="input-item"
        style={{ border: "none", outline: "none", width: "265px" }}
        onChange={onChange}
      >
        {category.map((item) => (
          <option value={item.id}>{item.name_uz}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchSelect;
