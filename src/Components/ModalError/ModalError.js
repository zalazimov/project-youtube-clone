import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ErrorModal({ isOpen, onClose, errorMessage }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={onClose}
        ariaHideApp={true}
        onClose={onClose}
      >
        <p>Error: Bad Request</p>
        <p>{errorMessage}</p>
        <button onClick={onClose} className="btn-danger">
          Close
        </button>
      </Modal>
    </>
  );
}
