import React from "react";

const SearchSelect = ({ category, onChange }) => {
  return (
    <div className="all-input">
      <p>Shahar</p>
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
