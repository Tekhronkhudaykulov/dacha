import React, { useState } from "react";
import Loading from "../../Loading/Loading";
import "../Buttons.scss";

const Button = ({
  title = "kirish",
  background,
  color,
  onClickButton,
  showButton = false,
  width,
  height,
  margin,
  fonstSize,
  padding,
  cursor,
  border,
  boxShadow,
  addClass,
  loading,
  type = "submit",
}) => {
  const [state, setState] = useState(showButton);

  return (
    <div className="button">
      {state ? (
        <button
          style={{
            background: background,
            color: color,
            width: width,
            height: height,
            marginRight: margin,
            fontSize: fonstSize,
            padding: padding,
            cursor: cursor,
            border: border,
            boxShadow: boxShadow,
          }}
          className={`kirish ${addClass}`}
          onClick={onClickButton}
          type={type}
        >
          {loading ? <Loading /> : title}
        </button>
      ) : null}
    </div>
  );
};

export { Button };
