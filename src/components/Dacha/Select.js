import React from "react";
import { useTranslation } from "react-i18next";
import "./Search.scss";

const Select = ({
  category,
  formProps,
  addClass = "profile-input-child",
  plusClass,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={`select-item ${addClass} ${plusClass}`}>
        <div class="city" style={{ marginBottom: "12px" }}>
          {t("Shahar")}
        </div>
        <select
          className="select-input"
          style={{ border: "none", outline: "none" }}
          {...formProps}
        >
          <option>Masalan, Toshkent viloyati</option>
          {category.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name_uz}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
