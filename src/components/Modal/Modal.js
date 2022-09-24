import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalTitle, Title } from "../Title/Title";
import requests from "../../helpers/requests";
import "./Modal.scss";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Modal = ({ setOpenModal }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="modal">
      <div className="modal-item">
        <div className="modal-title">
          <Title
            showButton={true}
            title={t("verifikationTitle")}
            fonstSize="45px"
          />
        </div>
        <p className="modal-p">{t("verifikationItems")}</p>
        <div className="logout-button" onClick={() => setOpenModal(false)}>
          <ModalTitle
            title={t("Chiqish")}
            border="1px solid green"
            width="220px"
            height="60px"
          />
        </div>
      </div>
    </div>
  );
};

const Modal2 = ({ setOpenModal }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="modal">
      <div className="modal-item">
        <div className="modal-title">
          <Title
            showButton={true}
            title={t("verifikationTitle")}
            fonstSize="45px"
          />
        </div>
        <p className="modal-p modal-p-size">{t("verifikationItems2")}</p>
        <div className="logout-button" onClick={() => setOpenModal(false)}>
          <ModalTitle
            title={t("Chiqish")}
            border="1px solid green"
            width="220px"
            height="60px"
          />
        </div>
      </div>
    </div>
  );
};

const AddModal = ({ modalClose, id }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteDacha = (id) => (dispatch) => {
    dispatch({ type: "delete_dacha_start", payload: id });
    requests
      .deleteDacha(id)
      .then(({ data }) => {
        dispatch({
          type: "delete_dacha_success",
          payload: id,
        });
        alert("E`lon o`chirildi!");
        navigate("/user");
      })
      .catch(({ response }) => {
        let message = (response && response.data.message) || "Login error";
        dispatch({ type: "delete_dacha_error", payload: message });
        alert("Tizimda  hatolik bor!");
        navigate(`/renameHome/${id}`);
      });
  };

  return (
    <div className="bg-modal">
      <div className="content-modal">
        <Title
          showButton={true}
          title={t("Tasdiqlash")}
          fonstSize="40px"
          margin="0"
        />
        <p className="modal-item">
          {t("HaqiqatdanHamelonniochirmoqchimisiz")}?
        </p>
        <div className="modal-button">
          <ModalTitle
            title={t("bekorqilish")}
            border="1px solid green"
            width="150px"
            height="40px"
            fonstSize="22px"
            onClick={() => modalClose(false)}
          />
          <ModalTitle
            title={t("Ochirish")}
            width="150px"
            height="40px"
            fonstSize="22px"
            background="green"
            color="white"
            margin="20px"
            onClick={() => dispatch(deleteDacha(id))}
          />
        </div>
      </div>
    </div>
  );
};
const ModalAddHomePage = ({ modalClose }) => {
  return (
    <div className="bg-modal">
      <div className="content-modal">
        <Title showButton={true} title="Eslatma" fonstSize="40px" margin="0" />
        <p className="modal-item">
          Dacha Travel saytida 2 chi e`lon qoyishingiz uchun kamida 5 000 so`mga
          toldiring
        </p>
        <div className="modal-button">
          <ModalTitle
            title="Bekor qilish"
            border="1px solid green"
            width="150px"
            height="40px"
            fonstSize="22px"
            onClick={() => modalClose(false)}
          />
          <ModalTitle
            title="To`lov"
            width="150px"
            height="40px"
            fonstSize="22px"
            background="green"
            color="white"
            margin="20px"
          />
        </div>
      </div>
    </div>
  );
};
export { AddModal, Modal, ModalAddHomePage, Modal2 };
