import React from "react";
import "./Search.scss";

const Select = ({ category, formProps, addClass = "profile-input-child" }) => {
  return (
    <>
      <div className={`select-item ${addClass}`}>
        <div class="city" style={{ marginBottom: "12px" }}>
          Shahar
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
