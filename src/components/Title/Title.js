import React, { useState } from "react";
import "./title.scss";

const Title = ({
  title = "Bo`limlar",
  fonstSize,
  showButton = false,
  margin,
}) => {
  const [state, setState] = useState(showButton);
  return (
    <>
      {state ? (
        <>
          <p
            style={{
              fontSize: fonstSize,
              marginTop: margin,
            }}
            className="p"
          >
            {title}
          </p>
          <div className="p-bottom" style={{ marginBottom: "30px" }}></div>
        </>
      ) : null}
    </>
  );
};

const UrlTitle = ({ title = "Registratsiya", showTitle = false }) => {
  const [titleState, setTitleState] = useState(showTitle);
  return <>{titleState ? <p className="title-url">{title}</p> : null}</>;
};

const ModalTitle = ({
  border,
  background,
  color,
  padding,
  height,
  title,
  fonstSize,
  width,
  margin,
  onClick,
}) => {
  return (
    <p
      className="modal-title-p"
      onClick={onClick}
      style={{
        fontSize: fonstSize,
        border: border,
        width: width,
        height: height,
        background: background,
        color: color,
        marginLeft: margin,
      }}
    >
      {title}
    </p>
  );
};
export { Title, UrlTitle, ModalTitle };
