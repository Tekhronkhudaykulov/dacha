import React, { useState } from "react";
import User from "../../../assets/icon/Solid/Communication/User.png";

const Input = ({
  inputName = "Foydalanuvchi nomi",
  img = User,
  inputType,
  showButton = false,
  margin,
  formProps,
  onChange,
}) => {
  const [state, setState] = useState(showButton);
  return (
    <div className={"login-input"} style={{ margin: margin }}>
      {state ? (
        <>
          <p>{inputName}</p>
          <div className="user-name">
            <img src={img} alt="" />
            <input {...formProps} type={inputType} onChange={onChange}/>
          </div>
        </>
      ) : null}
    </div>
  );
};

const InputValue = ({
  inputValue,
  type,
  margin,
  width,
  height,
  placeholder,
  position,
  opacity,
  heightInput,
  widghtInput,
  showValue = false,
  top,
  marginInput,
  onchange,
  value,
  formProps,
  name,
  addCLass = "profile-input-child",
  plusClass,
}) => {
  const [inputPlaceholder, setInputPlaceholder] = useState(showValue);

  return (
    <div className={`login-input ${addCLass} ${plusClass}`} style={{ margin: margin, width: width }}>
      <>
        <p>{inputValue}</p>
        <div className="user-name" style={{ width: width, height: height }}>
          <input
            multiple
            type={type}
            value={value}
            placeholder={placeholder}
            {...formProps}
            style={{
              position: position,
              height: heightInput,
              opacity: opacity,
              width: widghtInput,
              top: top,
              marginLeft: marginInput,
            }}
          />
        </div>
        {inputPlaceholder ? (
          <p className="inputPlaceholder">Rasm yuklash uchun ustiga bosing</p>
        ) : null}
      </>
    </div>
  );
};

export { Input, InputValue };
