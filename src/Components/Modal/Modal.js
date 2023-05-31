import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ closeModal }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <div className="modalBackground">
      <div className="text-danger mt-5 modalContainer">
        <div className="titleCloseBtn">
          <button
            className="overlay"
            onClick={() => closeModal(modal)}
          ></button>
          <div className="title">
            <h1>404</h1>
          </div>
          <div className="body">
            <h2>Page Not Found</h2>
          </div>
          <div className="footer btn-modal">
            <button
              className="btn btn-primary"
              onClick={() => {
                closeModal(modal);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      {/* <h1>404</h1>
      <h2>Page Not Found</h2>
      <button className="overlay">Click Me!</button> */}

      {/* {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>I am the modal</h2>
            <p></p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
