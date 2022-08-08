import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalTitle, Title } from "../Title/Title";
import "./Modal.scss";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modal">
      <div className="modal-item">
        <div className="modal-title">
          <Title showButton={true} title="Verifikatsiya" fonstSize="45px" />
        </div>
        <p className="modal-p">
          Verifikatsiya bu sizning vositachi emasligingizni yani makler
          emasligingizni belgisi. Ushbu belgini olganingizdan song siz vositachi
          emasligingizni tastiqlaysiz va sizning barcha elolaringiz tezroq
          tekshuruvdan otadi.
        </p>
        <div className="logout-button" onClick={() => setOpenModal(false)}>
          <ModalTitle
            title="Chiqish"
            border="1px solid green"
            width="220px"
            height="60px"
          />
        </div>
      </div>
    </div>
  );
};

const AddModal = ({ closeModal, onClick }) => {
  return (
    <div className="bg-modal">
      <div className="content-modal">
        <Title
          showButton={true}
          title="Tasdiqlash"
          fonstSize="40px"
          margin="0"
        />
        <p className="modal-item">Haqiqatdan ham e`lonni o`chirmoqchimisiz?</p>
        <div className="modal-button">
          <ModalTitle
            title="Bekor qilish"
            border="1px solid green"
            width="150px"
            height="40px"
            fonstSize="22px"
            onClick={() => closeModal(false)}
          />
          <ModalTitle
            title="O`chirish"
            width="150px"
            height="40px"
            fonstSize="22px"
            background="green"
            color="white"
            margin="20px"
            onClick={onClick}
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
export { AddModal, Modal, ModalAddHomePage };
