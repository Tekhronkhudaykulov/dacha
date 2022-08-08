import React, { useState } from "react";
import "../input.scss";
import SearchImg from "../../../assets/icon/Outline/Interface/Search.png";
import { useLocation } from "react-router-dom";

const Input = ({
  widthImg = "50px",
  heightImg = "50px",
  padding,
  margin,
  width,
  formProps,
  onKeyDown,
  none,
  onClick,
}) => {
  const location = useLocation();
  return (
    <div
      className="search-input-item"
      style={{ marginTop: margin, width: width, display: none }}
    >
      <div className="search-input">
        <input
          {...formProps}
          type="text"
          placeholder="Search country house"
          onKeyDown={onKeyDown}
        />
      </div>
      <button
        type="submit"
        className="search-icon asad-btn"
        style={{
          padding: padding,
        }}
        onClick={onClick}
      >
        <img
          style={{
            width: widthImg,
            height: heightImg,
          }}
          src={SearchImg}
          alt=""
        />
        {location.pathname !== "/" ? <p>Qidirish</p> : null}
      </button>
    </div>
  );
};

const SearchInput = ({
  inputName = "shahar",
  inputImg,
  inputPlaceholder,
  inputType,
  width,
  formValue,
}) => {
  return (
    <div className="all-input">
      <p>{inputName}</p>
      <div className="input-item" style={{ width: width }}>
        <img src={inputImg} alt="" />
        <input {...formValue} type={inputType} placeholder={inputPlaceholder} />
      </div>
    </div>
  );
};

const SearchChecbox = ({
  title,
  label,
  id,
  width,
  margin,
  showCheckbox = false,
  onChange = () => null,
}) => {
  const [checkBox, setCheckbox] = useState(showCheckbox);
  return (
    <>
      <div
        className="all-checkbox"
        style={{ width: width, marginLeft: margin }}
      >
        <p style={{ margin: "0 20px" }}>{title}</p>
        <input
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
          id={id}
          name="ttt"
        />
        <label for={label}></label>
      </div>
    </>
  );
};

export { Input, SearchInput, SearchChecbox };
